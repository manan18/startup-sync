import React, { FormEventHandler, useState } from "react";
import Image from "next/image";
import { EmployeeTable } from "@/components/employeeTable";
import employees from "@/data/employees/employees";
import Sidebar from "@/components/sidebar";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Dropdown from "@/components/dropdown";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Link from "next/link";

const Employees = () => {
  const [filteredData, setFilteredData] = useState(employees);
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage: number = 5;
  const [formData, setFormData] = useState({});

  const indexOfLastEntry: number = currentPage * entriesPerPage;
  const indexOfFirstEntry: number = indexOfLastEntry - entriesPerPage;
  const lastPage = Math.ceil(employees.length / entriesPerPage);
  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  function paginate2(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  const applyFilters: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const type = formData.getAll("type");
    const department = formData.getAll("department");
    const title = formData.getAll("title");

    setFilteredData(
      data.filter(
        (item) =>
          (!type.length || type.includes(item.type)) &&
          (!department.length || department.includes(item.department)) &&
          (!title.length || title.includes(item.title))
      )
    );
  };

  const [data, setData] = useState(employees);
  const [search, setSearch] = useState("");
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <form className="max-w-[70%] mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
                value={search}
                onChange={(e) => {
                  const searchTerm = e.target.value;
                  setSearch(e.target.value);
                  const filteredData = employees.filter((employee) =>
                    employee.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  );
                  setData(filteredData);
                }}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="flex py-4 mx-auto justify-between px-8">
          <div className="font-bold text-3xl flex-start">Employee List</div>
          <div className="flex-end">
            <Dropdown activeCondition={false}>
              {(handleClick, open) => (
                <div className="relative">
                  <button
                    type="submit"
                    className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-l p-2 flex border-2"
                    onClick={handleClick}
                  >
                    <HiOutlineAdjustmentsHorizontal className="text-xl cursor-pointer" />
                    Filter
                  </button>
                  {open && (
                    <div className="absolute top-8 right-0 min-w-[200px] bg-white p-3 rounded-lg py-2 text-gray-500 shadow-md">
                      <form id="filterForm" onSubmit={applyFilters}>
                        <ul className="py-2">
                          <li className="py-2">
                            <h2 className="text-gray-500 font-medium">
                              User Type
                            </h2>
                            <ul className="px-3">
                              <li>
                                <input
                                  type="checkbox"
                                  name="type"
                                  value="Admin"
                                  id="default-checkbox"
                                />
                                Admin
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="type"
                                  value="HR"
                                  id=""
                                />
                                HR
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="type"
                                  value="Employee"
                                  id=""
                                />
                                Employee
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="type"
                                  value="Accounting"
                                  id=""
                                />
                                Accounting
                              </li>
                            </ul>
                          </li>

                          <li className="py-2">
                            <h2 className="text-gray-500 font-medium">
                              Department
                            </h2>
                            <ul className="px-3">
                              <li>
                                <input
                                  type="checkbox"
                                  name="department"
                                  value="HR"
                                  id="default-checkbox"
                                />
                                HR
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  id=""
                                  name="department"
                                  value="Payroll"
                                />
                                Payroll
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="department"
                                  value="Management"
                                  id=""
                                />
                                Management
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="department"
                                  value="Recruitment"
                                  id=""
                                />
                                Recruitment
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="department"
                                  value="IT Support"
                                  id=""
                                />
                                IT Support
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="department"
                                  value="Finance"
                                  id=""
                                />
                                Finance
                              </li>
                            </ul>
                          </li>

                          <li className="py-2">
                            <h2 className="text-gray-500 font-medium">
                              Job Title
                            </h2>
                            <ul className="px-3">
                              <li>
                                <input
                                  type="checkbox"
                                  name="title"
                                  value="Director"
                                  id="default-checkbox"
                                />
                                Director
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="title"
                                  value="Manager"
                                  id=""
                                />
                                Manager
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="title"
                                  value="Consultant"
                                  id=""
                                />
                                Consultant
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="title"
                                  value="Accountant"
                                  id=""
                                />
                                Accountant
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="title"
                                  value="IT"
                                  id=""
                                />
                                IT Technician
                              </li>
                            </ul>
                          </li>

                          <li className="py-2">
                            <div className="flex justify-center">
                              <button
                                type="submit"
                                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Apply Filters
                              </button>
                            </div>
                          </li>
                        </ul>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </Dropdown>
          </div>
        </div>

        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-col align-center justufy-center">
            <EmployeeTable
              data={data}
              start={indexOfFirstEntry}
              end={indexOfLastEntry}
            />
          </div>

          <div className="flex justify-center">
            <ul className="flex space-x-6 py-4 px-4 ">
              {/* <li>
            <button className="outline outline-2 outline-offset-4 rounded-3xl ">
              <FaChevronLeft />
              </button>
            </li> */}
              <li>
                <button
                  className="rounded-3xl "
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft className="outline outline-2 outline-offset-4 " />
                </button>
              </li>

              <li hidden={!(indexOfLastEntry >= employees.length)}>
                <button
                  className="rounded-3xl"
                  onClick={() => paginate2(currentPage - 2)}
                >
                  <span className="outline outline-2 outline-offset-4">
                    {currentPage - 2}
                  </span>
                </button>
              </li>

              <li hidden={!(indexOfLastEntry >= employees.length)}>
                <button
                  className="rounded-3xl"
                  onClick={() => paginate2(currentPage - 1)}
                >
                  <span className="outline outline-2 outline-offset-4">
                    {currentPage - 1}
                  </span>
                </button>
              </li>

              <li
                hidden={
                  currentPage - 1 <= 0 || indexOfLastEntry >= employees.length
                }
              >
                <button
                  className="rounded-3xl"
                  onClick={() => paginate2(currentPage - 1)}
                  disabled={indexOfLastEntry >= employees.length}
                >
                  <span className="outline outline-2 outline-offset-4">
                    {currentPage - 1}
                  </span>
                </button>
              </li>

              <li hidden={currentPage == lastPage}>
                <button
                  className="rounded-3xl"
                  onClick={() => paginate2(currentPage)}
                  disabled={indexOfLastEntry >= employees.length}
                >
                  <span className="outline outline-2 outline-offset-4">
                    {currentPage}
                  </span>
                </button>
              </li>

              <li
                hidden={
                  indexOfLastEntry >= employees.length ||
                  currentPage + 1 == lastPage
                }
              >
                <button
                  className="rounded-3xl"
                  onClick={() => paginate2(currentPage + 1)}
                  disabled={indexOfLastEntry >= employees.length}
                >
                  <span className="outline outline-2 outline-offset-4">
                    {currentPage + 1}
                  </span>
                </button>
              </li>

              <li hidden={!(currentPage - 1 <= 0)}>
                <button
                  className="rounded-3xl"
                  onClick={() => paginate2(currentPage + 2)}
                  disabled={indexOfLastEntry >= employees.length}
                >
                  <span className="outline outline-2 outline-offset-4">
                    {currentPage + 2}
                  </span>
                </button>
              </li>

              <li>.</li>

              <li>.</li>

              <li>.</li>

              <li>
                <button
                  className="rounded-3xl"
                  onClick={() => paginate2(lastPage)}
                  disabled={indexOfLastEntry >= employees.length}
                >
                  <span className="outline outline-2 outline-offset-4">
                    {lastPage}
                  </span>
                </button>
              </li>

              <li>
                <button
                  className="rounded-3xl"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastEntry >= employees.length}
                >
                  <FaChevronRight className="outline outline-2 outline-offset-4 " />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
