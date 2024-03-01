import React from "react";
import { GoProject } from "react-icons/go";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsTools } from "react-icons/bs";

interface featureProps {
    icon: React.ReactNode;
    name: string;
    description: string;
}

const features: featureProps[] = [
    {
        icon: <GoProject />,
        name: 'Intuitive Project Management',
        description: 'Streamline tasks and projects effortlessly with our user-friendly project management tools, ensuring efficient collaboration and progress tracking.'
    },
    {
        icon: <MdOutlineAttachMoney className="text-xl" />,
        name: 'Financial Tracking and Reporting',
        description: "Stay in control of your startup's finances with robust financial tracking and reporting features, providing insights into budgeting, expenses, and revenue."
    },
    {
        icon: <BsPersonVcard />,
        name: 'Employee Management',
        description: 'Effectively manage your team with dedicated tools for employee onboarding, performance tracking, and communication, fostering a productive and engaged workforce.'
    },
    {
        icon: <MdOutlineEventAvailable />,
        name: 'Event Management',
        description: "Seamlessly plan and execute events with our specialized tools, ensuring smooth coordination, promotion, and analysis for successful outcomes."
    },
    {
        icon: <BsBagCheck />,
        name: 'Product Analysis',
        description: "Gain deep insights into your product's performance through comprehensive analysis tools, allowing you to make informed decisions for product enhancement and market success"
    },
    {
        icon: <MdOutlineSecurity />,
        name: "Data Security and Encryption",
        description: "Rest easy knowing that your sensitive data is protected with robust security measures, including encryption protocols and compliance with industry standards."
    },
    {
        icon: <HiOutlineDocumentReport />,
        name: "Insightful Analytics and Reporting",
        description: "Gain valuable insights into your startup's performance with detailed analytics and reporting features, empowering data-driven decision-making for future growth."
    },
    {
        icon: <BsTools />,
        name: "Integration with Third-Party Tools",
        description: "Enhance your workflow by seamlessly integrating with other essential tools and applications, allowing for a cohesive and interconnected tech ecosystem."
    }
];
export default features;