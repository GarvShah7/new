import React from 'react'
import clsx from 'clsx'


import ServicesDevelopmentCard from './ServicesDevelopmentCard'
import { ServiceDevelopmentSectionFragment } from '../../../../app/api/generated/graphql/graphql'
import { PortableText } from '@portabletext/react'


const ServicesDevelopmentSection: React.FC<{ block: ServiceDevelopmentSectionFragment }> = ({
    block,
}) => {
    const { description, developmentCard, sectionTheme } = block || {}

    return (
        <section className={clsx('serviceDevSection', sectionTheme ?? 'bg-white')}>
            <div className="container">
                <div className="serviceDevContent">
                    {developmentCard?.map((cardItem, index) => {
                        return (
                            <>
                                <ServicesDevelopmentCard {...cardItem} key={index} />
                            </>
                        )
                    })}
                </div>
                <div className="middleText sectionInnerSpace">
                    <PortableText value={description?.customeRichTextRaw} />
                </div>
            </div>
        </section>
    )
}
export default ServicesDevelopmentSection
