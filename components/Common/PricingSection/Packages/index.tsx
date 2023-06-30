import clsx from 'clsx'
import React from 'react'


import PackageDetail from '../PackageDetail'
import { PlanFragment } from '../../../../app/api/generated/graphql/graphql'

const Packages: React.FC<{ plan: PlanFragment }> = ({ plan }) => {
    return (
        <div>
            {plan?.packages?.map((i, index) => {
                return (
                    <div className="price-col-details" key={index}>
                        {i?.popularity && <div className="price-tab popular">Most Popular</div>}
                        {!i?.popularity && (
                            <div className="price-tab common">{i?.package_title}</div>
                        )}
                        <div
                            className={clsx(
                                { 'price-col-bg common': !i?.popularity },
                                { 'price-col-bg premium': i?.popularity },
                            )}
                            key={index}
                        >
                            {i?.popularity && <div className="price-tab"> {i?.package_title} </div>}
                            <div className="price-tab">
                                {i?.package_price_value?.replace(
                                    '{price}',
                                    i.package_price ?? '0',
                                )}
                            </div>
                            <div className="price-tab">{i?.package_duration}</div>
                            <div>
                                {i?.package_details?.map((item, index) => {
                                    return(
                                      <React.Fragment>
                                      {item && <PackageDetail item={item} key={index} />}
                                      </React.Fragment>  
                                     )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Packages
