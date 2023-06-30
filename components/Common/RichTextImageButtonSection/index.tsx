
import clsx from 'clsx'
import { Fragment } from 'react'

import { RichTextImageButtonSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import { PortableText } from '@portabletext/react'
import Image from '../Image'
import Button from '../Button'

const RichTextImageButtonSection: React.FC<{ block: RichTextImageButtonSectionFragment }> = ({
    block,
}) => {
    const { description, button, image, sectionTheme } = block || {}
    const { customeRichTextRaw } = description || {}

    return (
        <Fragment>
            <section className={clsx('richTextImageBtnSection', sectionTheme ?? 'bg-white')}>
                <div className="container">
                    <div className="richTextImageBtnContent gridBox">
                        <div className="leftSide">
                            <PortableText value={customeRichTextRaw} />
                        </div>
                        <div className="rightSide text-center">
                          {image &&  <Image block={image} />}
                            {button && <Button block={button} />}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default RichTextImageButtonSection
