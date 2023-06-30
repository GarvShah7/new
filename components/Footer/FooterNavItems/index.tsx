import Link from "next/link"
import { NavbarLinksFragment } from "../../../app/api/generated/graphql/graphql"


const FooterNavItems: React.FC<{ block: NavbarLinksFragment }> = ({ block }) => {
    const { navLabel, navLink } = block || {}

    return (
        <li>
           <Link href={navLink as string}>{navLabel}</Link>
        </li>
    )
}

export default FooterNavItems
