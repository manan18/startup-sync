import { FaRegChartBar } from "react-icons/fa";
import { BsClipboard2Data } from "react-icons/bs";
import { IoBagAddOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";

const DashCardData = [
    {
        icon: <FaRegChartBar />,
        data: "$5k",
        iconstyle: {
            color: "#d69e2e"
        },
        textstyle: {
            color: "#d69e2e"
        },
        title: "Total Sales",
        stat: "+10% from yesterday",
        className2: "text-green-700"
    },
    {
        icon: <BsClipboard2Data />,
        data: "500+",
        iconstyle: {
            color: "#38a169",
        },
        textstyle: {
            color: "#38a169"
        },
        title: "Total Orders",
        stat: "+5% from yesterday"
    },
    {
        icon: <IoBagAddOutline />,
        data: "50+",
        iconstyle: {
            color: "#d53f8c",
            textsize: "3xl"
        },
        textstyle: { color: "#d53f8c" },
        title: "Product Sold",
        stat: "+2% from yesterday"
    },
    {
        icon: <AiOutlineUserAdd />,
        data: "14+",
        title: "New Customers",
        iconstyle: { color: "#3182ce" },
        textstyle: { color: "#3182ce" },
        stat: "+20% from yesterday"
    }
]

export default DashCardData;
