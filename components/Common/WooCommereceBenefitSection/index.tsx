
import clsx from 'clsx'

import { WoocommerceBenefitSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import { PortableText } from '@portabletext/react'
import TitleSubtitle from '../TitleSubtitle'
import Image from '../Image'

const WoocommerceBenefitsSection: React.FC<{ block: WoocommerceBenefitSectionFragment }> = ({
    block,
}) => {
    const { benefitImage, titleSubtitle, woocommercebenefitRichText, sectionTheme } = block || {}

    return (
        <section className={clsx('wooComBenfSection', sectionTheme ?? 'bg-white')}>
            <div className="container">
                <div className="wooComBenContent">
                   {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
                    <div className="wooComBenGrid gridBox">
                        <div className="leftSide">
                         { benefitImage &&  <Image block={benefitImage} />}
                        </div>
                        <div className="rightSide">
                            <ul>
                                {woocommercebenefitRichText?.map((richText, index) => {
                                    return (
                                        <li key={index}>
                                            <PortableText value={richText?.customeRichTextRaw} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WoocommerceBenefitsSection
