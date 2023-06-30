import { CompaniesLogoTitleArrayFragment } from "../../../../app/api/generated/graphql/graphql"
import DynamicComponent from "../../../DynamicComponent"
import Image from "../../Image"


const CompaniesLogoTitleArray: React.FC<CompaniesLogoTitleArrayFragment> = ({ ...item }) => {
    const { title, image } = item || {}

    return (
        <>
            <div className="companyIcon">
               {image &&  <Image block={image} />}
            </div>
            <h6>{title}</h6>
        </>
    )
}
export default CompaniesLogoTitleArray
