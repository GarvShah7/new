
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { ServicesDetailsFragment } from '../../../../app/api/generated/graphql/graphql'

const ServicesDetails: React.FC<{ block: ServicesDetailsFragment }> = ({ block }) => {
    const { description, heading, title } = block || {}
    const { customeRichTextRaw, } = description || {}
    const components: Partial<PortableTextReactComponents | any> = {
        
        block: ({ children, node }) => {
            switch (node.style) {
              case 'normal':
                return <p className="text-[1em] font-[400] text-[#fff9] max-w-[80%] tracking-[0.03em] pb-[1em]">{children}</p>;
              default:
                return <p>{children}</p>;
            }
          },
        list: {
            bullet: ({ children }) => <ul className="pt-[2.188em] pl-[1.125em] list-disc">{children}</ul>,
        },
        listItem :{
            bullet : ({ children }) => <li className="text-[1.125em] font-[500] tracking-[0.03em] pb-[1.578em] pl-[0.3em]">{children}</li>,
        },
        
    }

    return (
        <div className="serviceDetails flex flex-col relative h-full">
            <div className="serviceTitle">
                {heading && heading?.length > 0 ? <h4 className='font-[400] text-[1em] tracking-[0.03em] pb-[0.5em]'>{heading}</h4> : null}
                {title && title?.length > 0 ? <h3 className='text-[1.875em] font-[600] leading-[1.4] tracking-[0.03em] pb-[0.633em]'>{title}</h3> : null}
            </div>
            <PortableText value={customeRichTextRaw} components={components} />
        </div>
    )
}

export default ServicesDetails
