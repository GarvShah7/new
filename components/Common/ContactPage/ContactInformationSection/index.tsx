import clsx from 'clsx'
import { Fragment } from 'react'

import { ContactInformationSectionFragment } from '../../../../app/api/generated/graphql/graphql'
import Link from 'next/link'
import DynamicComponent from '../../../DynamicComponent'
import { PortableText } from '@portabletext/react'

const ContactInformationSection: React.FC<{ block: ContactInformationSectionFragment }> = ({
    block,
}) => {
    const { contactUsCard, email, officeAddress, officeTime, phoneNo, sectionTheme } = block || {}
    const { addressDescription, addressTitle, directions } = officeAddress || {}
    const { customeRichTextRaw } = addressDescription || {}
    const { timeDescription, timeTitle } = officeTime || {}

    return (
        <Fragment>
            <section
                className={clsx('contactInfoSection sectionInnerSpace', sectionTheme ?? 'bg-white')}
            >
                <div className="container">
                    <div className="contactInfoContent gridBox">
                        <div className="leftSide">
                            <ul className="contactList">
                                <li>
                                    <span className="email">
                                        <Link href={`mailto:${email}`}>{email}</Link>
                                    </span>
                                    <span className="phone">
                                        <Link href={`tel:${phoneNo}`}>{phoneNo}</Link>
                                    </span>
                                </li>
                                <li>
                                    <span className="label">{addressTitle}</span>
                                    <span className="address">
                                        <PortableText value={customeRichTextRaw} />
                                    </span>
                                    <DynamicComponent block={directions} />
                                </li>
                                <li>
                                    <span className="label">{timeTitle}</span>
                                    <PortableText value={timeDescription?.customeRichTextRaw} />
                                </li>
                            </ul>
                        </div>
                        <div className="rightSide">
                            <div className="mvGrid mt-0">
                                {contactUsCard?.map((item, index) => {
                                    return <DynamicComponent block={item} key={index} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactInformationSection
