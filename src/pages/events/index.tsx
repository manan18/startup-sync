import Sidebar from "@/components/sidebar";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import IconButton from "@/components/atoms/button/icon";
import { IoRocketSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import avatar from "@/assets/img/sample-user.jpg";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";

export const Greetings = ({ user }: { user: string }) => {
  const hours = new Date().getHours();
  const time =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-400">Hiiiii {user},</p>
      <p className="text-2xl font-bold">{time}</p>
    </div>
  );
};

export const MonthNavigation = ({
  onChange,
  value,
}: {
  onChange: (month: string) => void;
  value: string;
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentMonth, setCurrentMonth] = React.useState(value);

  const handlePrevMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex === 0) return;
    setCurrentMonth(months[currentIndex - 1]);
    onChange(months[currentIndex - 1]);
  };
  const handleNextMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex === months.length - 1) return;
    setCurrentMonth(months[currentIndex + 1]);
    onChange(months[currentIndex + 1]);
  };

  return (
    <div className="flex gap-6 items-center">
      <div className="relative h-max">
        <IoCalendarOutline className="absolute top-1/2 -translate-y-1/2 left-2" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block appearance-none w-full bg-white border-[1.5px] border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500 pl-8"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-1/2 -translate-y-1/2">
          <RiArrowDropDownLine className="text-2xl" />
        </div>
      </div>
      <div className="flex gap-2">
        <IconButton
          onClick={handlePrevMonth}
          icon={<FaChevronLeft />}
          variant="rounded"
          className="border border-gray-300 bg-white"
        />
        <IconButton
          onClick={handleNextMonth}
          icon={<FaChevronRight />}
          variant="rounded"
          className="border border-gray-300 bg-white"
        />
      </div>
    </div>
  );
};

export const Popup = ({
  message,
  visible,
}: {
  message: string;
  visible: boolean;
}) => {
  const [show, setShow] = React.useState(visible);
  return (
    <div
      className={clsx(
        "bg-[#eaf2fd] mt-4 p-4 flex justify-between px-6 rounded-md shadow",
        {
          hidden: !show,
        }
      )}
    >
      <div className="flex gap-4 items-center">
        <IoRocketSharp className="text-2xl text-blue-500" />
        <p className="text-[#428af5] text-sm font-semibold">{message}</p>
      </div>
      <IconButton
        icon={<IoClose />}
        variant="pill"
        className=""
        onClick={() => setShow(false)}
      />
    </div>
  );
};

export const EventCard = () => {
  return (
    <div className="py-4 px-3 w-full bg-white rounded-md shadow">
      <p className="text-sm font-semibold">Meeting with team</p>
      <p className="text-xs text-gray-400">10:00 AM - 11:00 AM</p>
    </div>
  );
};

export const EventSection = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Upcoming Events</p>
        <Link href={"#"} className="text-sm text-blue-500">
          View All
        </Link>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <div className="rounded-md flex items-center justify-center">
            <p className="text-sm font-semibold text-[#394e69]">3 September</p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        {/* /divider */}
        <div className="w-full h-[2px] bg-gray-100 my-4"></div>
        <div className="flex items-center gap-4">
          <div className="rounded-md flex items-center justify-center">
            <p className="text-sm font-semibold text-[#394e69]">3 September</p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RightBar = () => {
  return (
    <div className="p-4 py-8 bg-white border-l w-full overflow-scroll">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt="user"
            className="rounded-full h-10 w-10"
            objectFit="cover"
          />
          <div className="flex gap-1 cursor-pointer">
            <p className="font-semibold">Sumit</p>
            <RiArrowDropDownLine className="text-xl text-gray-500" />
          </div>
        </div>
        <IconButton
          icon={<IoNotificationsOutline />}
          variant="pill"
          className="bg-[#f4f7fe] border border-gray-300"
        />
      </div>
      <EventSection />
    </div>
  );
};

const EventsPage = () => {
  const [month, setMonth] = React.useState("January");
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 grid grid-cols-[1fr,27%] bg-[#f4f7fe] font-noto-sans">
        <div className="p-8 overflow-scroll">
          <div className="flex h-max items-center justify-between">
            <Greetings user="Sumit" />
            <MonthNavigation
              value={month}
              onChange={(month) => setMonth(month)}
            />
          </div>
          <Popup message="Event added successfully" visible />
          <div className="mt-8">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              headerToolbar={false}
              viewClassNames={["w-full"]}
            />
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default EventsPage;
