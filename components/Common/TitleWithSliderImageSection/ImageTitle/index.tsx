import { ImageTitleFragment } from "../../../../app/api/generated/graphql/graphql"
import DynamicComponent from "../../../DynamicComponent"
import Image from "../../Image"

const ImageTitle: React.FC<{ block: ImageTitleFragment }> = ({ block }) => {
    const { image, title } = block || {}

    return (
        <span className={`${title ? 'withTitle' : 'withoutTitle'}`}>
            {image && <Image block={image} />}
            {title ? <h6>{title}</h6> : null}
        </span>
    )
}
export default ImageTitle
