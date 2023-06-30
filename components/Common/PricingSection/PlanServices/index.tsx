import { PlanFragment } from "../../../../app/api/generated/graphql/graphql"


const PlanServices: React.FC<{ block: PlanFragment }> = ({ block }) => {
    return (
        <>
            <ul>
                {block?.plan_services?.map((i, index) => {
                    return (
                        <li
                            key={index}
                            className={`${i?.trim() == '' ? 'price-tab empty' : 'price-tab'}`}
                        >
                            {i}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default PlanServices
