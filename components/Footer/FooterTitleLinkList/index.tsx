import React from "react"
import { FooterTitleLinkListFragment } from "../../../app/api/generated/graphql/graphql"
import DynamicComponent from "../../DynamicComponent"


const FooterTitleLinkList: React.FC<{ block: FooterTitleLinkListFragment }> = ({ block }) => {
    const { linkList, title } = block || {}
    return (
        <React.Fragment>
            <h6 className="label">{title}</h6>
            {linkList?.map((item, index) => {
                return <DynamicComponent block={item} key={index} />
            })}
        </React.Fragment>
    )
}

export default FooterTitleLinkList
