
import clsx from 'clsx'
import { Fragment } from 'react'
import { TypeAnimation } from 'react-type-animation'

import { ContactHeroSectionFragment } from '../../../app/api/generated/graphql/graphql'
import { PortableText } from '@portabletext/react'

const ContactHeroSection: React.FC<{ block: ContactHeroSectionFragment }> = ({ block }) => {
    const { description, sectionTheme, mainTitle, title } = block || {}
    const { customeRichTextRaw } = description || {}
    return (
        <Fragment>
            <section className={clsx('contactBannerSection', sectionTheme ?? 'bg-white')}>
                <div className="container">
                    <div className="contactBannerContent">
                        {/* <h2>{mainTitle}</h2> */}
                        <TypeAnimation
                            sequence={[
                                'Namaste.',
                                3000,
                                'Salve.',
                                3000,
                                'Cześć.',
                                3000,
                                'Olá.',
                                3000,
                                'Hola.',
                                3000,
                                'Hallå.',
                                3000,
                                'xin chào.',
                                3000,
                                'Nǐ hǎo.',
                                3000,
                                'Bonjour.',
                                3000,
                                'Ciao.',
                                3000,
                            ]}
                            wrapper="h2"
                            repeat={Infinity}
                            cursor={false}
                        />
                        <PortableText value={customeRichTextRaw} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactHeroSection
