import clsx from 'clsx'
import { Fragment } from 'react'

import DevelopmentArray from './DevelopmentArray'
import { PortfolioInnerDevelopmentSectionFragment } from '../../../app/api/generated/graphql/graphql'

const PortfolioInnerDevelopmentSection: React.FC<{
    block: PortfolioInnerDevelopmentSectionFragment
}> = ({ block }) => {
    const { titleImageButton,sectionTheme } = block || {}

    return (
        <Fragment>
            <section
                className={clsx('portfolioSection sectionInnerSpace', sectionTheme ?? 'bg-white')}
            >
                <div className="container">
                    <div className="portfolioContent">
                        {titleImageButton?.map((item, index) => {
                            return (
                                <div className="portfolioRow" key={index}>
                                  {item &&  <DevelopmentArray item={item} />}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default PortfolioInnerDevelopmentSection
