import clsx from 'clsx'
import { Fragment } from 'react'


import CompaniesLogoTitleArray from './CompaniesLogoTitleArray'
import { NextJsuSeCompaniesSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import Image from '../Image'
import TitleSubtitle from '../TitleSubtitle'

const NextJSUseCompaniesSection: React.FC<{ block: NextJsuSeCompaniesSectionFragment }> = ({
    block,
}) => {
    const { sectionTheme, companiesLogoTitleArray, image, titleSubtitle } = block || {}

    return (
        <Fragment>
            <section className={clsx('companyLogoSection', sectionTheme ?? 'bg-white')}>
                <div className="container">
                    <div className="companyLogoContent">
                      {titleSubtitle &&  <TitleSubtitle block={titleSubtitle} />}
                        <div className="companyCenterImage">
                            {image && <Image block={image} />}
                        </div>
                        <ul className="companyLogoGrid">
                            {companiesLogoTitleArray?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <CompaniesLogoTitleArray {...item} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default NextJSUseCompaniesSection
