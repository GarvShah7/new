import Image from "next/image"
import { ComparisionFieldFragment } from "../../../../app/api/generated/graphql/graphql"
import blacktrue from '../../../../app/assets/images/black-true.svg'
import blackfalse from '../../../../app/assets/images/black-false.svg'


const PackageDetail = ({ item }: { item: ComparisionFieldFragment }) => {
    switch (item?.type) {
        case 'string':
            return <div> {item?.string} </div>
        case 'boolean':
            return item?.boolean_value ? (
                <>
                    <Image src={blacktrue} alt="true" height={10} width={10}/>
                </>
            ) : (
                <>
                    <Image src={blackfalse} height={10} width={10} alt="false" />
                </>
            )
        default:
            return <></>
    }
}

export default PackageDetail
