import React from 'react'


import ImageButtontitle from './ImageButtonTitle'
import { TitleImageButtonFragment } from '../../../../app/api/generated/graphql/graphql'

const DevelopmentArray: React.FC<{item : TitleImageButtonFragment}> = ({ item }) => {
    const { imageButtonTitle, title } = item || {}
    return (
        <>
            <h2>{title}</h2>
            <div className="portfolioGrid">
                {imageButtonTitle?.map((item, index) => {
                    return <ImageButtontitle {...item} key={index} />
                })}
            </div>
        </>
    )
}

export default DevelopmentArray
