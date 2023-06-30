import clsx from 'clsx'
import { HomeServicesSectionFragment } from '../../../app/api/generated/graphql/graphql'
import ServicesDetails from './ServiceDetails'
import DynamicComponent from '../../DynamicComponent'
import TitleSubtitle from '../../Common/TitleSubtitle'
const HomeServicesSection: React.FC<{ block: HomeServicesSectionFragment }> = ({ block }) => {
    const { titleSubtitle, servicesDetails, sectionTheme, serviceDetailsColumn, withoutNumber } =
        block || {}
    return (
        <section
            className={clsx(
                'serviceSection sectionInnerSpace py-[8.125em]',
                sectionTheme ?? 'bg-white',
                serviceDetailsColumn ?? 'three',
                withoutNumber ? 'withoutNumber' : 'withNumber',
            )}
        >
            <div className="container max-w-[1440px] w-[90%] mx-auto">
                <div className="font-Montserrat text-white">
                    <div className="sectionInfo pb-[4.375em]">
                       {titleSubtitle && <TitleSubtitle block={titleSubtitle} />}
                        
                    </div>
                    <ul className={clsx(`serviceList gridBox col${serviceDetailsColumn} pl-[6.5em] grid grid-cols-3 gap-[1.875em]`)}>
                        {servicesDetails?.map((details, index) => {
                            return (
                                <li key={index}>
                                    {details && <ServicesDetails block={details} key={index} />}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HomeServicesSection
