import React from 'react'
import clsx from 'clsx'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'


import 'react-tabs/style/react-tabs.css'
import { TitleDescriptionArrayWithSideTitleArraySectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import { PortableText } from '@portabletext/react'
import TitleSubtitle from '../TitleSubtitle'

const TitleDescriptionArrayWithSideTitleArraySection: React.FC<{
    block: TitleDescriptionArrayWithSideTitleArraySectionFragment
}> = ({ block }) => {
    const { titleSubtitle, title, TitleDescription, sideTitleArray, sectionTheme } = block || {}

    return (
        <section
            className={clsx('titledesarraySection sectionInnerSpace', sectionTheme ?? 'bg-white')}
        >
            <div className="container">
                {/* ========== OLD DESIGN =========*/}
                {/* <div className="titledesarrayContent gridBox col1-2">
                    <div className="leftSide">
                        <ul>
                            {TitleDescription?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <h3>{item?.sideTitle}</h3>
                                        <h6>{item?.title}</h6>
                                        <PortableText
                                            value={
                                                item?.descriptionDetailsRichText?.customeRichTextRaw
                                            }
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="rightSide">
                        <ul className="withBorderLine">
                            {sideTitleArray?.map((title, index) => {
                                return (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div> */}
                {/* ========== OLD DESIGN  ===========*/}
                {/* =========== NEW DESIGN =========== */}
                <div className="titledesarrayContent">
                   {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
                    <Tabs>
                        <TabPanel>
                            {TitleDescription?.slice(0, 2).map((item, index) => {
                                return (
                                    <>
                                        {item?.sideTitle && item?.sideTitle?.length > 0 ? (
                                            <h3>{item?.sideTitle}</h3>
                                        ) : null}
                                        <div className="appBox">
                                            <h6>{item?.title}</h6>
                                            <PortableText
                                                value={
                                                    item?.descriptionDetailsRichText
                                                        ?.customeRichTextRaw
                                                }
                                            />
                                        </div>
                                    </>
                                )
                            })}
                        </TabPanel>
                        <TabPanel>
                            {TitleDescription?.slice(2, 4).map((item, index) => {
                                return (
                                    <>
                                        {item?.sideTitle && item?.sideTitle?.length > 0 ? (
                                            <h3>{item?.sideTitle}</h3>
                                        ) : null}
                                        <div className="appBox">
                                            <h6>{item?.title}</h6>
                                            <PortableText
                                                value={
                                                    item?.descriptionDetailsRichText
                                                        ?.customeRichTextRaw
                                                }
                                            />
                                        </div>
                                    </>
                                )
                            })}
                        </TabPanel>
                        <TabPanel>
                            {TitleDescription?.slice(4).map((item, index) => {
                                return (
                                    <>
                                        {item?.sideTitle && item?.sideTitle?.length > 0 ? (
                                            <h3>{item?.sideTitle}</h3>
                                        ) : null}
                                        <div className="appBox">
                                            <h6>{item?.title}</h6>
                                            <PortableText
                                                value={
                                                    item?.descriptionDetailsRichText
                                                        ?.customeRichTextRaw
                                                }
                                            />
                                        </div>
                                    </>
                                )
                            })}
                        </TabPanel>
                        <TabList>
                            {sideTitleArray?.map((title, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Tab>
                                            <span>{title}</span>
                                        </Tab>
                                    </React.Fragment>
                                )
                            })}
                        </TabList>
                    </Tabs>
                </div>

                {/* ============ NEW DESIGN ========== */}
            </div>
        </section>
    )
}
export default TitleDescriptionArrayWithSideTitleArraySection
