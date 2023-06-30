import clsx from 'clsx'
import { Fragment } from 'react'

import { TitledescfullimagesectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import Image from '../Image'
import TitleSubtitle from '../TitleSubtitle'

const TitleDescFullImageSection: React.FC<{
    block: TitledescfullimagesectionFragment
}> = ({ block }) => {
    const { titleSubtitle, image, sectionTheme } = block || {}

    return (
        <Fragment>
            <section
                className={clsx(
                    'titleDescFullImgSection sectionInnerSpace',
                    sectionTheme ?? 'bg-white',
                )}
            >
                <div className="container">
                    <div className="titleDescFullImgContent">
                       {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
                        <div className="fullImage">
                            {image && <Image block={image} />}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default TitleDescFullImageSection
