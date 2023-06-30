import clsx from 'clsx'
import { ImageTitleFragment, TitleWithSliderImageSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import React from 'react'
import TitleSubtitle from '../TitleSubtitle'



const TitleWithSliderImageSection: React.FC<{ block: TitleWithSliderImageSectionFragment }> = ({
    block,
}) => {
    const { titleSubtitle, sectionTheme, ifCenterImage, imageTitle } = block || {}
    const getImageTitle = imageTitle as ImageTitleFragment[]
    const middleImageNumber = Math.ceil(getImageTitle?.length / 2)
    return (
        <section
            className={clsx(
                'logoGridSection',
                sectionTheme ?? 'bg-white',
                ifCenterImage ? 'CenterImage' : 'withoutCenterImage',
            )}
        >
            <div className="container">
                <div className="logoGridContent">
                   {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
                    <div className="desktopView">
                        <ul className={`logoList col-${imageTitle?.length}`}>
                            {imageTitle?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <DynamicComponent block={item} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {ifCenterImage && (
                        <div className="mobileView">
                            <div className="logoBig">
                                {imageTitle?.map((i, index) => {
                                    if (index === middleImageNumber - 1) {
                                        return (
                                            <React.Fragment>
                                                <DynamicComponent block={i} />
                                            </React.Fragment>
                                        )
                                    }
                                })}
                            </div>
                            <ul className="logoBlock">
                                {imageTitle?.map((i, index) => {
                                    if (middleImageNumber - 1 == index) {
                                        return null
                                    }
                                    return (
                                        <React.Fragment>
                                            <li key={index} className="mobileViewImage">
                                                <DynamicComponent block={i} />
                                            </li>
                                        </React.Fragment>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
export default TitleWithSliderImageSection
