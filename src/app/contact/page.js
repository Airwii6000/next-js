import Image from "next/image";

export default function Contacts() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-120 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-500 mt-2">Email: airwii.airwii88@gmail.com</p>
        <p className="text-gray-500 mt-2">Location: Ulaanbaatar, Mongolia</p>
      </div>
    </div>
  );
}
