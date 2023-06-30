// import { useNavigate } from '@remix-run/react'
import React, { useEffect } from 'react'

import { ThankyouFragment } from '../../../app/api/generated/graphql/graphql'
import DynamicComponent from '../../DynamicComponent'
import Image from '../Image'

const ThanksPage: React.FC<{ block: ThankyouFragment }> = ({ block }) => {
    const { image } = block
    // const navigate = useNavigate()
    // React.useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         navigate('/')
    //     }, 5000)
    // }, [])
    return (
        <>
            <section className="thankyouSection sectionInnerSpace">
                <div className="container">
                    <div className="thankyouContent">
                        <div className="thankyouImage">
                           {image && <Image block={image} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThanksPage
