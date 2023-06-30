
import clsx from 'clsx'

import { TitleSubtitleImageArraySideRichTextSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import { PortableText } from '@portabletext/react'
import Image from '../Image'
import TitleSubtitle from '../TitleSubtitle'

const TitleSubtitleImageArraySideRichTextSection: React.FC<{
    block: TitleSubtitleImageArraySideRichTextSectionFragment
}> = ({ block }) => {
    const { titleSubtitle, companiesLogoImage, sideRichText, sectionTheme } = block || {}
    const { customeRichTextRaw } = sideRichText || {}

    return (
        <section className={clsx('imageArraySideRichtextSection', sectionTheme ?? 'bg-white')}>
            <div className="container">
                <div className="imageArraySideRichtextContent">
                    {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
                    <div className="imageArraySideRichtextGrid gridBox">
                        <div className="leftSide">
                            <ul>
                                {companiesLogoImage?.map((image, index) => {
                                    return (
                                        <li key={index}>
                                           {image &&  <Image block={image} />}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="rightSide">
                            <PortableText value={customeRichTextRaw} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TitleSubtitleImageArraySideRichTextSection
