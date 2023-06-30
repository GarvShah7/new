import React, { useState } from 'react'
import clsx from 'clsx'


import TabItem from './TabItem'
import { TechStackSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import TitleSubtitle from '../TitleSubtitle'

const TechStackSection: React.FC<{ block: TechStackSectionFragment }> = ({ block }) => {
    const { tabItem, titleSubtitle, sectionTheme } = block

    const [sortedAppIcons, setSortedAppIcons] = useState<string | null | undefined>(
        tabItem ? tabItem[0]?.title : null,
    )
    return (
        <section
            className={clsx(
                'techStackSection sectionInnerSpace bg-black',
                sectionTheme ?? 'bg-white',
            )}
        >
            <div className="container">
                <div className="techStackContent">
                {titleSubtitle &&    <TitleSubtitle block={titleSubtitle} />}

                    <div className="techStackTabs">
                        <ul className="techStackTitle">
                            {tabItem?.map((tabName, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={clsx('tab', {
                                            active: sortedAppIcons == tabName?.title,
                                        })}
                                        onClick={() => setSortedAppIcons(tabName?.title)}
                                    >
                                        {tabName?.title}
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className="texhStackList">
                            {tabItem?.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {item?.title === sortedAppIcons && <TabItem {...item} />}
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStackSection
