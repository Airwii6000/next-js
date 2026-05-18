import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const navLinks = [
    { href: "/content", label: "Content" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/teachers", label: "Teachers" },
    { href: "/students", label: "Students" },
    { href: "/404", label: "404" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl flex flex-col shadow-lg p-8 w-80 text-center gap-3">

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIsY968PEurdOmgmRDTsqv-noA_8HRZxzAA&s"
          alt="Profile picture"
          className="w-28 h-28 mx-auto rounded-full object-cover"
        />

        <h1 className="text-2xl font-bold text-gray-800">Airwii</h1>
        <p className="text-sm text-gray-400 -mt-2">Welcome to our platform</p>

        <div className="flex flex-col gap-2 mt-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="w-full py-2.5 px-4 rounded-xl bg-gray-50 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}