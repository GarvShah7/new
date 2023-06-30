import { Fragment } from 'react'
import { AuthorQouteFragment } from '../../../app/api/generated/graphql/graphql'
import Image from 'next/image'
import quotation from '../../../app/assets/images/quotation-mark.svg'


const AuthorQouteSection: React.FC<{ block: AuthorQouteFragment }> = ({ block }) => {
    const { authorName, description } = block || {}
    return (
        <Fragment>
            <section className="quoteSection">
                <div className="quoteContent">
                    <div className="quoteMark">
                        <Image src={quotation} height={10} width={10} alt="quote" />
                    </div>
                    <p>{description}</p>
                    <h6>{authorName}</h6>
                </div>
            </section>
        </Fragment>
    )
}

export default AuthorQouteSection
