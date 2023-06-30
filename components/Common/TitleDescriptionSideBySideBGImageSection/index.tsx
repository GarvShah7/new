
import clsx from 'clsx'
import { TitleDescriptionSideBySideBgImageSectionFragment } from '../../../app/api/generated/graphql/graphql'
import { PortableText } from '@portabletext/react'


const TitleDescriptionSideBySideBGImageSection: React.FC<{
    block: TitleDescriptionSideBySideBgImageSectionFragment
}> = ({ block }) => {
    const { title,description,image, sectionTheme, bgImageOption } = block || {}
    const { customeRichTextRaw } = description || {}

    return (
        <section
            className={clsx(
                'titledescsbsSection sectionInnerSpace',
                sectionTheme ?? 'bg-white',
                bgImageOption ?? 'without-bg-image',
            )}
        >
            <div className="container">
                <div className="titledescsbsContent">
                    <div className="gridBox col15-2">
                        <div className="leftSide">
                            <h3>{title}</h3>
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
export default TitleDescriptionSideBySideBGImageSection
