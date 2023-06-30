
import { Fragment } from 'react'
import { AllPageFragment, HomeFragment, TitleHoverImageSectionFragment } from '../../app/api/generated/graphql/graphql'
import clsx from 'clsx'
import DynamicComponent from '../DynamicComponent'
import HoverImageCard from './HoverImageCard'
import TitleSubtitle from '../Common/TitleSubtitle'


const TitleHoverImageSection: React.FC<{
    block: TitleHoverImageSectionFragment
    services_card?: HomeFragment[] | AllPageFragment[]
}> = ({ block, services_card }) => {
    const { sectionTheme, titleSubtitle } = block || {}

    return (
        <Fragment>
            <section
                className={clsx('hoverBoxSection sectionInnerSpace', sectionTheme ?? 'bg-white')}
            >
                <div className="container">
                    <div className="hoverBoxSectionContent">
                        <div className="sectionInfo">
                           {titleSubtitle &&  <TitleSubtitle block={titleSubtitle} />}
                        </div>
                        <div className="hoverBoxWrap gridBox col4">
                            {services_card?.slice(0, 4)?.map((item, index) => {
                                return <HoverImageCard block={item} key={index} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default TitleHoverImageSection
