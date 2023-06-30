import clsx from 'clsx'
import React, { Fragment } from 'react'


import NumberTitleBlock from './NumberTitle'
import { CompanyInfoSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import Image from '../Image'
import TitleSubtitle from '../TitleSubtitle'

const CompanyInfoSection: React.FC<{ block: CompanyInfoSectionFragment }> = ({ block }) => {
    const { titleSubtitle, appIconImage, sectionTheme, imageArray, numberTitle } = block

    return (
        <Fragment>
            <section
                className={clsx('companyInfosection sectionInnerSpace', sectionTheme ?? 'bg-white')}
            >
                <div className="container">
                    <div className="companyInfoContent">
                    {titleSubtitle &&    <TitleSubtitle block={titleSubtitle} />}
                        <div className="countWrap">
                            {numberTitle && numberTitle?.map((item, index) => {
                                return (
                                    <React.Fragment>
                                     {item &&   <NumberTitleBlock item={item} key={index} />}
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <div className="countImgGrid">
                            {imageArray && imageArray?.map((i, index) => {
                                return (
                                    <div className="countImgBox" key={index}>
                                       { i &&  <Image block={i} />}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="appIconWrap">
                            {appIconImage && appIconImage?.map((iconTitle, index) => {
                                return <DynamicComponent block={iconTitle} key={index} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default CompanyInfoSection
