import clsx from "clsx"
import { TypeAnimation } from "react-type-animation"
import { HomeHeroSectionFragment } from "../../../app/api/generated/graphql/graphql"
import DynamicComponent from "../../DynamicComponent"
import Button from "../../Common/Button"


const HomeHeroSection: React.FC<{ block: HomeHeroSectionFragment }> = ({ block }) => {
    const { mainTitle, mainTitleArray, subTitle, description, button, sectionTheme } = block || {}

    return (
        <section className={clsx('bannerSection ', sectionTheme ?? 'bg-white')}>
            <div className="container max-w-[1440px] w-[90%] mx-auto">
                <div className="bannerContent pt-[8.375em] pb-[6.688em] max-w-[70%] font-Montserrat">
                    <h1 className="home-banner--title withAnimation text-[5em] font-[700] leading-[1] pb-[0.5em]">
                        <span className="flex items-center">
                             <span>{mainTitle}</span>
                            <div className="pl-[0.35em] morphing">
                                {' '}
                                <TypeAnimation
                                    sequence={[
                                        `${mainTitleArray && mainTitleArray[0]}`,
                                        1000,
                                        `${mainTitleArray && mainTitleArray[1]}`,
                                        1000,
                                        `${mainTitleArray && mainTitleArray[2]}`,
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={20}
                                    repeat={Infinity}
                                />
                            </div>
                        </span>
                        <span className="block font-[400]">{subTitle}</span>
                    </h1>
                    <p className="home-banner--description max-w-[80%] text-[1.125em] leading-[1.7] font-[400] text-[#000000b3]">{description}</p>
                    <div className="pt-[3.125em]">
                        {button && <Button block={button} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeroSection
