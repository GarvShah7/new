import clsx from 'clsx'
import React, { Fragment } from 'react'

import { ContactMapSectionFragment } from '../../../../app/api/generated/graphql/graphql'

const ContactMapSection: React.FC<{ block: ContactMapSectionFragment }> = ({ block }) => {
    const { mapImage, sectionTheme } = block || {}

    return (
        <Fragment>
            <div className={clsx('mapSection sectionInnerSpace', sectionTheme ?? 'bg-white')}>
                <div className="container">
                 {mapImage &&   <div className="contactus-map" dangerouslySetInnerHTML={{ __html: mapImage }} />}
                </div>
            </div>
        </Fragment>
    )
}

export default ContactMapSection
