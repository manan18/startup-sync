import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

interface SidebarItem {
    id: number;
    title: string;
    icon: React.ReactNode;
}

const sidebarItems1: SidebarItem[] = [
    {
        id: 0,
        title: "Home",
        icon: <FaHome />,
    },
    {
        id: 1,
        title: "Teams",
        icon: <RiTeamFill />,
    },
    {
        id: 2,
        title: "Goals",
        icon: <GoGoal />,
    },
    {
        id: 3,
        title: "Private Tasks",
        icon: <FaStar />,
    },
    {
        id: 4,
        title: "Analytics",
        icon: <SiGoogleanalytics />,
    },
];

export default sidebarItems1;