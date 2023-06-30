import {  MetaAttributeFragment, MetaTagFragment } from "../../generated/graphql/graphql"


export function reduce_to_single_item<Type>(
    data: (Type & { _id?: string })[] = [],
    preview: boolean = process.env.NODE_ENV === 'development',
): Type {
    if (!Array.isArray(data)) {
        return data
    }
    if (data?.length === 1) {
        return Object.assign({}, ...data) as Type
    }
    if (preview) {
        return data.find(item => item?._id?.startsWith(`drafts.`)) || data[0]
    }
    return data[0]
}

export const getMetaObjects = (tags: MetaTagFragment[]) => {
    const tag_obj: Record<string, unknown> = {}

    tags.map(tag => {
        Object.assign(tag_obj, { [tag?._key as string]: getMetaAttribute(tag?.meta_attributes as MetaAttributeFragment[] ) })
    })
    return tag_obj
}

export const getMetaAttribute = (attrs: MetaAttributeFragment[]) => {
    if (!attrs) {
        return {}
    }
    const obj: Record<string, string> = {}
    attrs.map(i => {
            const {attribute_key,attribute_type,attribute_value_image,attribute_value_string} = i as MetaAttributeFragment || {}
        Object.assign(obj, {
            [attribute_key?.trim() as string] :
                attribute_type == 'image'
                    ? attribute_value_image?.asset?.url
                    : attribute_value_string?.trim(),
        })
    })

    return obj
}
