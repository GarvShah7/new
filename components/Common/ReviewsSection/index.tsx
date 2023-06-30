
import clsx from 'clsx'
import { Fragment } from 'react'
import { ReviewsSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from "../../DynamicComponent";
import { PortableText } from '@portabletext/react';
import Button from '../Button';

const ReviewsSection: React.FC<{ block: ReviewsSectionFragment }> = ({ block }) => {
    const { button, textWithImage, descriptionRichText,sectionTheme } = block || {}
    const { customeRichTextRaw } = textWithImage || {}

    return (
        <section className="reviewUsSection">
            <div className="container max-w-[1440px] w-[90%] mx-auto">
                <div
                    className={clsx(
                        'reviewUsContent gridBox col2-1 bg-blackWithRadius bg-black px-[6.25em] py-[3.75em] rounded-[10px] flex items-center justify-between',
                        sectionTheme ?? 'bg-black',
                    )}
                >
                    <div className="leftSide text-white max-w-[60%]">
                        <div className="withImageTitle [&>h4]:text-[1.875em] [&>h4]:font-[700] [&>h4]:leading-[1.4] [&>h4]:inline-block [&>h4]:capitalize [&>img]:max-w-[7em] [&>img]:h-auto [&>img]:object-contain">
                            <PortableText value={customeRichTextRaw}/>
                        </div>
                        <PortableText value={descriptionRichText?.customeRichTextRaw} />
                    </div>

                    <div className="rightSide">
                        {button && <Button block={button} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection
