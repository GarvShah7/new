import React from "react"
import { IconTitleArrayFragment } from "../../../../app/api/generated/graphql/graphql"
import DynamicComponent from "../../../DynamicComponent"
import Image from "../../Image"


const IconTitle: React.FC<IconTitleArrayFragment> = ({ ...item }) => {
    const { image, title } = item || {}
    return (
        <React.Fragment>
            <div className="richIcon">
                {image && <Image block={image} />}
            </div>
            <h6>{title}</h6>
        </React.Fragment>
    )
}

export default IconTitle
