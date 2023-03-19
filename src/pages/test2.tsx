import Head from "next/head";
import Sidebar from "./components/sidebar";
import Side from "./components/side1";
import Card from "./components/card";
import Search from "./components/search";

export default function test2() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between">
        <Sidebar />
        <div className="w-full mx-12 my-8">
          <div className="flex flex-wrap justify-between">
            <div>
              <span className="text-gray-400 text-md">Assert Admin &#62;</span>
              <span className="text-gray-700 font-semibold">
                Manage Categories
              </span>
            </div>
            <button className="text-white font-semibold text-md bg-purple-600 px-3 py-1 rounded-md my-2">
              <i className="uil uil-plus"></i> Add Category
            </button>
          </div>
          <div className=" flex w-full   flex-wrap align-middle ">
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Finance
            </span>
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Electronics
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Media and Communication
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Software Services
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Human Resource
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Marketing
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Construction
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Teaching
            </span>

            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Business Development
            </span>
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Soft Skills
            </span>
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Management
            </span>
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Entrepreneurship
            </span>
            <span className="bg-gray-300 text-gray-700 text-base p-3 rounded-full my-2">
              Custom
            </span>
          </div>
          <div className="flex flex-wrap justify-between align-middle my-6">
            <span className="text-purple-700 font-bold">
              Certificates under the category
            </span>
            <Search />
          </div>
          <div className="flex flex-wrap justify-around my-6 width-40">
            <Card titleMain={"Accounts Finance"} number={7} />
            <Card titleMain={"Taxation Finance"} number={4} />
            <Card titleMain={"Finance"} number={5} />
            <Card titleMain={"Financial Market"} number={0} />
          </div>
        </div>
      </div>
    </div>
  );
}
