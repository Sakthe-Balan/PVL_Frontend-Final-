import Head from "next/head";
import Sidebar from "./components/sidebar";
import Card from "./components/card1";
import Banner from "./components/banner";

export default function test2() {
  return (
    <div className="w-full h-full bg-white">
      <div className="w-full flex justify-between">
        <Sidebar />
        <div className="w-full mx-28 my-8 ">
          <div className="flex flex-wrap justify-evenly w-full">
            <Banner
              color={"orange"}
              title={"STUDENTS"}
              number={26}
              icon={""}
            ></Banner>

            <Banner
              color={"sky"}
              title={"DEPARTMENTS"}
              number={5}
              icon={""}
            ></Banner>
            <Banner
              color={"green"}
              title={"PLACEMENTS"}
              number={0}
              icon={""}
            ></Banner>
          </div>
          <button className="text-white font-semibold text-md px-3 py-2 rounded-md my-2 bg-orange-500 align">
            Share with Recruiters <i className="uil uil-share"></i>
          </button>

          <p className="text-green-600 text-xl font-bold my-8">
            Upcoming Placement Opportunities
          </p>
          <div className="flex flex-wrap justify-between w-full">
            <div>
              <p className="text-blue-500 font-bold text-lg my-2">
                Placement tests
              </p>
              <p className="text-gray-500 font-semibold text-md my-2">
                No Placement Tests Scheduled Yet
              </p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-lg my-2">
                Pre-Assessments
              </p>
              <p className="text-gray-500 font-semibold text-md my-2">
                No Pre-Assessments Tests Scheduled Yet
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between my-4 flex-wrap align-middle">
            
            <Card
              title={'Placement Exams History'}
              percent={'3.8%'}
              title1={'Total Students Attempted'}
              title2={'Total Students Cleared'}
              val1={1}
              val2={1}
            ></Card>
            <Card
              title={'Pre-Assessments Report'}
              percent={'30.8%'}
              title1={'Total Students Attempted'}
              title2={'Total Students Cleared'}
              val1={86}
              val2={8}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
