import TagTypeController from './TagTypeController'
import TagController from './TagController'
const Tag = {
    TagTypeController: Object.assign(TagTypeController, TagTypeController),
TagController: Object.assign(TagController, TagController),
}

export default Tag