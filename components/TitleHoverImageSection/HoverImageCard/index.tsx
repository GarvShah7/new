import { Fragment } from "react"
import Link from "../../Common/Link"
import DynamicComponent from "../../DynamicComponent"
import { AllPageFragment, HeroSectionFragment, HomeFragment } from "../../../app/api/generated/graphql/graphql"
import Image from "../../Common/Image"


const HoverImageCard: React.FC<{ block:HomeFragment | AllPageFragment }> = ({ block }) => {
    const { sections, slug, title } = block || {}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const hero_section = sections && sections?.find(
        (i: { _type: string }) => i._type == 'heroSection',
    ) as HeroSectionFragment
    if (!hero_section) {
        return null
    }   
    const { image } = hero_section || {}

    return (
        <Fragment>
            <Link to={slug?.current || ""}>
                <div className="hoverBox">
                    <div className="hoverImage">
                       {image && <Image block={image} />}
                    </div>
                    <div className="hoverContent">
                        <span>{title}</span>
                    </div>
                </div>
            </Link>
        </Fragment>
    )
}

export default HoverImageCard
