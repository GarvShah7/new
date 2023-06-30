
import DynamicComponent from "../../../DynamicComponent"
import { HiringModelDetailsFragment } from "../../../../app/api/generated/graphql/graphql"
import React from "react"
import { PortableText } from "@portabletext/react"
import Image from "../../Image"


const HiringModelDetails: React.FC<{ block: HiringModelDetailsFragment }> = ({ block }) => {
    const { image, modelDetailsDescription, modelDetailsTitle } = block || {}
    const { customeRichTextRaw } = modelDetailsDescription || {}
    return (
        <React.Fragment>
            <div className="leftSide">
              {image &&  <Image block={image} />}
            </div>
            <div className="rightSide">
                <h5>{modelDetailsTitle}</h5>
                <PortableText value={customeRichTextRaw} />
            </div>
        </React.Fragment>
    )
}

export default HiringModelDetails
