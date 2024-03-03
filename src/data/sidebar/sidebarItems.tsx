import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

interface SidebarItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

const sidebarItems1: SidebarItem[] = [
    {
        id: 0,
        title: "Dashboard",
        icon: <FaHome />,
    },
    {
        id: 1,
        title: "Team Management",
        icon: <RiTeamFill />,
    },
    {
        id: 2,
        title: "Event Management",
        icon: <FaCalendarAlt />,
    },
    {
        id: 3,
        title: "Merchandise Store",
        icon: <IoBagCheck />,
    },
    {
        id: 4,
        title: "Product Analysis",
        icon: <SiGoogleanalytics />,
    },
    {
        id: 5,
        title: "Expense Tracking",
        icon: <MdOutlineAttachMoney className="text-lg" />,
    },
    {
        id: 6,
        title: "Settings",
        icon: <IoSettingsSharp />,
    }
];

export default sidebarItems1;