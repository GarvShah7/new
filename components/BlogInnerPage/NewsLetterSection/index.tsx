import React, { useState } from "react"
import { BlogInnerSideContentFragment } from "../../../app/api/generated/graphql/graphql"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import EmailForm from "../../EmailForm"
import { MAILCHIMP_URL } from "../../../app/api/utils/constants"

const NewsLetterSection: React.FC<{
    blogInnerSideContent?: BlogInnerSideContentFragment
    env?: NodeJS.ProcessEnv | null
}> = ({ env, blogInnerSideContent }) => {

    const [successMessage, setSuccessMessage] = useState<string | null>('')
    const { newsLetter } = blogInnerSideContent || {}
    const { title, description } = newsLetter || {}

    return (
        <>
            <section className="newsLetterSection">
                <div className={successMessage ? 'newsLetterContent dark' : 'newsLetterContent'}>
                    <div className="newsLetterHeader">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="newsLetterForm">
                        <MailchimpSubscribe
                            url={String(MAILCHIMP_URL)}
                            render={({ subscribe, status, message }) => (
                                <>
                                    <>
                                        <EmailForm
                                            status={status}
                                            message={message}
                                            subscribe={subscribe}
                                        />
                                        {status === 'sending' && (
                                            <div className="validation sending">sending...</div>
                                        )}
                                        {status === 'error' && (
                                            <div
                                                className="validation error"
                                                dangerouslySetInnerHTML={{
                                                    __html: String(message),
                                                }}
                                            />
                                        )}
                                        {status === 'success' && (
                                            <div className="validation thankYou">{message}</div>
                                        )}
                                    </>
                                </>
                            )}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(NewsLetterSection)
