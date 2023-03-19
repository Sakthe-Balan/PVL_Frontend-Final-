import { useState } from "react";
import Image from "next/image";
import {
  FaUserAlt,
  FaUniversity,
  FaBlog,
  FaFileAlt,
  FaUsers,
} from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const navbarOptions = [    { name: "Manage Categories", icon: <FaFileAlt />, href: "#" },    { name: "Add Company", icon: <IoIosAddCircle />, href: "#" },    { name: "Add New User", icon: <FaUserAlt />, href: "#" },    { name: "Add New Certificates", icon: <FaFileAlt />, href: "#" },    { name: "University Actions", icon: <FaUniversity />, href: "#" },    { name: "Add Students", icon: <FaUsers />, href: "#" },    { name: "Add MCQ Questions", icon: <FaFileAlt />, href: "#" },    { name: "Recruiters and Jobs", icon: <IoIosAddCircle />, href: "#" },    { name: "Universities", icon: <FaUniversity />, href: "#" },    { name: "View All Users", icon: <FaUsers />, href: "#" },    { name: "Trial Version", icon: <FaFileAlt />, href: "#" },    { name: "Add Blogs", icon: <FaBlog />, href: "#" },  ];

  return (
    <div>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-2 right-100 bg-white p-2 rounded-full shadow-md"
      >
        {collapsed ? "Show" : "Hide"}
      </button>
      <aside
        className={`flex-shrink-0 w-64 bg-sky-900 border-r border-gray-200 overflow-y-auto h-100% text-sm text-center ${
          collapsed ? "hidden" : ""
        }`}
      >
        <div className="px-4 py-3 border-b border-gray-200 text-center">
          <h1 className="text-lg font-semibold text-sky-400  text-center">
            Admin Panel
          </h1>
        </div>
        <nav className="mt-4">
          {navbarOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              className={`flex items-center px-4 py-3 hover:bg-white hover:text-blue-600 uil  ${
                activeOption === option.name
                  ? "bg-white text-blue-600"
                  : "text-white"
              }`}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.icon}
              <span className="ml-2">{option.name}</span>
            </a>
          ))}
          <br />
          <br />
          <div className="flex text-white">
            <img
              src="https://www.vhv.rs/dpng/d/488-4880035_whatsapp-unknown-dp-hd-png-download.png"
              width={90}
              height={90}
            />
            A Sakthe Balan
            <br />
          </div>
        <p className="text-white relative bottom-10 right-4">Admin</p>
      </nav>
    </aside>
    </div>
  );

};

export default Sidebar;
