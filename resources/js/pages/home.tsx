import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { dashboard, login } from '@/routes';

interface Photo {
    id: number;
    name: string;
    path: string;
    mime_type: string | null;
    size: number | null;
    url: string;
    download_url: string;
    created_at: string | null;
}

export default function Home({ photos }: { photos: Photo[] }) {
    const { auth } = usePage().props as { auth: { user: any } };
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const uploadForm = useForm<{ photo: File | null }>({ photo: null });

    const [renamePhoto, setRenamePhoto] = useState<Photo | null>(null);
    const [renameValue, setRenameValue] = useState('');

    const handleUpload = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile) return;
        uploadForm.setData('photo', selectedFile);
        uploadForm.post('/photos', {
            forceFormData: true,
            onSuccess: () => {
                setSelectedFile(null);
                uploadForm.reset();
            },
        });
    };

    const openRename = (photo: Photo) => {
        setRenamePhoto(photo);
        setRenameValue(photo.name);
    };

    const submitRename = (e: React.FormEvent) => {
        e.preventDefault();
        if (!renamePhoto) return;
        router.patch(`/photos/${renamePhoto.id}`, { name: renameValue }, {
            onSuccess: () => setRenamePhoto(null),
        });
    };

    const handleDelete = (photo: Photo) => {
        if (confirm(`Delete ${photo.name}?`)) {
            router.delete(`/photos/${photo.id}`);
        }
    };

    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                <header className="border-b border-[#e3e3e0] px-6 py-4 dark:border-[#3E3E3A]">
                    <div className="mx-auto flex max-w-6xl items-center justify-between">
                        <h1 className="text-lg font-semibold">Photo Storage</h1>
                        <nav className="flex items-center gap-4 text-sm">
                            {auth?.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-sm border border-[#19140035] px-4 py-1.5 hover:border-[#1915014a] dark:border-[#3E3E3A]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={login()}
                                    className="rounded-sm border border-transparent px-4 py-1.5 hover:border-[#19140035] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="mx-auto max-w-6xl p-6">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Upload photo</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleUpload} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                                <div className="flex-1">
                                    <Label htmlFor="photo">Image file</Label>
                                    <Input
                                        id="photo"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
                                    />
                                </div>
                                <Button type="submit" disabled={!selectedFile || uploadForm.processing}>
                                    {uploadForm.processing ? 'Uploading...' : 'Upload'}
                                </Button>
                            </form>
                            {uploadForm.errors.photo && (
                                <p className="mt-2 text-sm text-red-500">{uploadForm.errors.photo}</p>
                            )}
                        </CardContent>
                    </Card>

                    {photos.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-[#e3e3e0] p-12 text-center text-[#706f6c] dark:border-[#3E3E3A] dark:text-[#A1A09A]">
                            No photos yet. Upload your first image above.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {photos.map((photo) => (
                                <Card key={photo.id} className="overflow-hidden">
                                    <div className="aspect-square w-full overflow-hidden bg-muted">
                                        <img
                                            src={photo.url}
                                            alt={photo.name}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <CardFooter className="flex items-center justify-between gap-2">
                                        <span className="truncate text-sm font-medium" title={photo.name}>
                                            {photo.name}
                                        </span>
                                        <div className="flex shrink-0 gap-1">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => openRename(photo)}
                                            >
                                                Rename
                                            </Button>
                                            <a href={photo.download_url}>
                                                <Button variant="ghost" size="sm">
                                                    Download
                                                </Button>
                                            </a>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleDelete(photo)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </main>

                <Dialog open={!!renamePhoto} onOpenChange={(open) => !open && setRenamePhoto(null)}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Rename photo</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={submitRename} className="flex flex-col gap-4">
                            <Input
                                value={renameValue}
                                onChange={(e) => setRenameValue(e.target.value)}
                                autoFocus
                            />
                            <DialogFooter>
                                <Button type="button" variant="ghost" onClick={() => setRenamePhoto(null)}>
                                    Cancel
                                </Button>
                                <Button type="submit">Save</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}