import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
        <div className=" flex items-top justify-center bg-gray-100 mb-20">
            <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
        </div>
        <div className="flex justify-between ">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-120 h-24 text-center ">
                <p className="text-gray-500 mt-2">We are a team of passionate individuals dedicated to making a difference.</p>
            </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 w-120 h-24 text-center">
                <p className="text-gray-500 mt-2">We are a team of passionate individuals dedicated to making a difference.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 w-120 h-24 text-center">
                <p className="text-gray-500 mt-2">We are a team of passionate individuals dedicated to making a difference.</p>
            </div>
      </div>
    </div>
  );
}
