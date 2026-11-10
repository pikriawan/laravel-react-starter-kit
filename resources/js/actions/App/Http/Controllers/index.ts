import PhotoController from './PhotoController'
import Settings from './Settings'

const Controllers = {
    PhotoController: Object.assign(PhotoController, PhotoController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers