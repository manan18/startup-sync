import blog1 from "@/assets/img/blog1.jpg";
import blog2 from "@/assets/img/blog2.jpg";
import blog3 from "@/assets/img/blog3.jpg";
import blog4 from "@/assets/img/blog4.jpg";
import blog5 from "@/assets/img/blog5.jpg";
import blog6 from "@/assets/img/blog6.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import blw1 from "@/assets/img/blw1.jpeg";
import blw2 from "@/assets/img/blw2.jpg";
import blw3 from "@/assets/img/blw3.jpeg";
import blm1 from "@/assets/img/blm1.jpg";
import blm2 from "@/assets/img/blm2.jpeg";
import blm3 from "@/assets/img/blm3.jpg";

type CarouselType = {
    icon: StaticImport | string;
    author: string;
    date: string;
    image: StaticImport | string;
    title: string;
}[]

const carousel: CarouselType = [
    {
        author: "Emily Johnson",
        date: "February 15, 2024",
        image: blog1,
        title: "Mastering the Event: Pro Tips for Seamless Planning and Execution",
        icon: blw1
    },
    {
        author: "Daniel Lee",
        date: "July 18, 2024",
        image: blog3,
        title: "Tech Trends Unveiled: A Glimpse into the Future of Entrepreneurship",
        icon: blm1
    },
    {
        author: "Sophia Chen",
        date: "June 5, 2024",
        image: blog2,
        title: "Beyond the Balance Sheet: Financial Wisdom for Growing Startups",
        icon: blw2
    },
    {
        author: "Marcus Rodriguez",
        date: "May 12, 2024",
        image: blog4,
        title: "Empowering Your Team: Strategies for Effective Employee Management",
        icon: blm2
    },
    {
        author: "Olivia Williams",
        date: "April 20, 2024",
        image: blog5,
        title: "The Art of Innovation: A Guide to Creative Problem-Solving",
        icon: blw3
    },
    {
        author: "Alex Turner",
        date: "March 8, 2024",
        image: blog6,
        title: "Navigating the Startup Landscape: Insights for Success",
        icon: blm3
    }
]

export default carousel;