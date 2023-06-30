import React from "react"
import { JamstackResourceSectionFragment, ResourceDetailCardFragment } from "../../../../app/api/generated/graphql/graphql"
import DynamicComponent from "../../../DynamicComponent"
import Image from "../../Image"


const ResourceDetailCard: React.FC<{ block: ResourceDetailCardFragment }> = ({ block }) => {
    const { title, description, image } = block || {}

    return (
        <React.Fragment>
            <div className="jrIcon">
              {image && <Image block={image} />}
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </React.Fragment>
    )
}

export default ResourceDetailCard
