import clsx from 'clsx'
import { useState } from 'react'

import { HiringModelSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import React from 'react'

const HiringModelSection: React.FC<{ block: HiringModelSectionFragment }> = ({ block }) => {
    const { hiringModelDetails, titleSubtitle, sectionTheme } = block || {}

    const [sortedDetails, setSortedDetails] = useState<string | null | undefined>(
        hiringModelDetails ? hiringModelDetails[0]?.modelDetailsTitle : null,
    )
    return (
        <section
            className={clsx('hiringModalSection sectionInnerSpace', sectionTheme ?? 'bg-white')}
        >
            <div className="container">
                <div className="hiringModalContent">
                    <div className="innerpageSectionInfo">
                        <DynamicComponent block={titleSubtitle} />
                    </div>
                    <ul className="hiringModalTabs">
                        {hiringModelDetails?.map((buttonTitle, index) => {
                            return (
                                <li
                                    className={clsx('hiringTab', {
                                        active: sortedDetails == buttonTitle?.modelDetailsTitle,
                                    })}
                                    key={index}
                                    onClick={() => setSortedDetails(buttonTitle?.modelDetailsTitle)}
                                >
                                    {buttonTitle?.modelDetailsTitle}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="hiringModalDetails">
                        {hiringModelDetails?.map((item, index) => {
                            return (
                                <div className="tabContentBox gridBox col1-2" key={index}>
                                    {item?.modelDetailsTitle === sortedDetails && (
                                        <React.Fragment>
                                            <DynamicComponent block={item} />
                                        </React.Fragment>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HiringModelSection
