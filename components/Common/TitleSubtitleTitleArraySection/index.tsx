import clsx from 'clsx'
import { Fragment } from 'react'
import { TitleSubtitleTitleArraySectionFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import TitleSubtitle from '../TitleSubtitle'

const TitleSubtitleTitleArraySection: React.FC<{
    block: TitleSubtitleTitleArraySectionFragment
}> = ({ block }) => {
    const { titleSubtitle, titleArray, sectionTheme } = block || {}

    return (
        <section
            className={clsx('borderTitleSection sectionInnerSpace', sectionTheme ?? 'bg-white')}
        >
            <div className="container">
                <div className="borderTitleContent">
                  {titleSubtitle &&  <TitleSubtitle block={titleSubtitle} />}
                    <div className="borderTitleGrid">
                        {titleArray?.map((item, index) => {
                            return (
                                <div className="borderTitleBox" key={index}>
                                    <h6>{item}</h6>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TitleSubtitleTitleArraySection
