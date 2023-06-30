
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { SideContentWithQueAnsFragment } from '../../../../app/api/generated/graphql/graphql'
import { PortableText } from '@portabletext/react'


const QueAnsSection: React.FC<SideContentWithQueAnsFragment> = ({ ...details }) => {
    const { questionAndAnswer } = details || {}
    const [currActiveIndex, setCurrActiveIndex] = useState<number[]>([])
    return (
        <Fragment>
            {questionAndAnswer?.map((item, index) => {
                return (
                    <li key={index} className={clsx({ active: currActiveIndex.includes(index) })}>
                        <Accordion
                            allowZeroExpanded={true}
                            allowMultipleExpanded={true}
                            preExpanded={[0]}
                            onClick={() =>
                                setCurrActiveIndex(state => {
                                    if (state.includes(index)) {
                                        return state.filter(i => i != index)
                                    } else {
                                        return [...state, index]
                                    }
                                })
                            }
                        >
                            <AccordionItem uuid={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h4>{item?.title}</h4>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <PortableText value={item?.description?.customeRichTextRaw} />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </li>
                )
            })}
        </Fragment>
    )
}
export default QueAnsSection
