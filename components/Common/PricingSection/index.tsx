import clsx from 'clsx'
import React, { Fragment, useState } from 'react'


import { PlanFragment, PricingSectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import Link from '../Link'
import PriceTable from '../PriceTable'
import TitleSubtitle from '../TitleSubtitle'

const PriceSection: React.FC<{ block: PricingSectionFragment }> = ({ block }) => {
    const { titleSubtitle, mainTitle, pricingSection, sectionTheme } = block || {}
    const { plans, planDiscussButton,planNavigation } = pricingSection || {}
    const getPlans = plans as PlanFragment
    const [planDuration, setPlanDuration] = useState(plans ? getPlans[plans?.length - 1].plan_name : '')

    const filterItems = (plan: PlanFragment | null) => {
        if (planDuration != '') {
            const isPlanDuration =
                plan?.plan_name?.toString()?.toLowerCase() ===
                planDuration?.toString()?.toLowerCase()
            return isPlanDuration
        }
        return false
    }

    return (
        <section
            className={clsx('pricetable-section sectionInnerSpace', sectionTheme ?? 'bg-white')}
            id="pricetable-section"
        >
            <div className="container">
                <div className="pricetabel-container">
                    <div className="pricetable-header">
                        <div className="section-header">
                           {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
                            <h4 className="extra-sub-title text-center">{mainTitle}</h4>
                        </div>
                    </div>

                    {plans?.filter(item => filterItems(item))
                        ?.map((item, index) => {
                            return (
                                <div className="pricetable-content" key={index}>
                                    {item && <PriceTable block={item} />}
                                   {item && <PriceTable
                                        block={item}
                                        key={index}
                                        minified
                                        className="price-table-minified"
                                    />}
                                </div>
                            )
                        })}
                    <div className="pricetable-footer">
                        <h6>{planNavigation}</h6>
                        <Link to={planDiscussButton?.buttonLink} className="button withDefaultArrow">
                            {' '}
                            {planDiscussButton?.buttonLabel}{' '}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PriceSection
