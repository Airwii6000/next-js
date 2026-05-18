import Link from "next/link";

const contents = [
  {
    id: 1,
    title: "Getting Started",
    description: "Learn the basics of our platform and how to get up and running quickly.",
    href: "/content/getting-started",
  },
  {
    id: 2,
    title: "For Students",
    description: "Resources, guides, and materials designed to help students succeed.",
    href: "/students",
  },
  {
    id: 3,
    title: "For Teachers",
    description: "Tools and content to help educators manage and inspire their classes.",
    href: "/teachers",
  },
  {
    id: 4,
    title: "Announcements",
    description: "Stay up to date with the latest news and updates from Airwii.",
    href: "/content/announcements",
  },
  {
    id: 5,
    title: "FAQ",
    description: "Answers to the most common questions about using the platform.",
    href: "/content/faq",
  },
];

export default function ContentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-4">

        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">Content</h1>
          <p className="text-sm text-gray-400 mt-1">Browse everything available on Airwii</p>
        </div>

        {/* Content Cards */}
        {contents.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-200 group"
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-semibold text-gray-800 text-sm group-hover:text-white transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          </Link>
        ))}

        {/* Back */}
        <Link
          href="/"
          className="text-center text-sm text-gray-400 hover:text-gray-700 transition-colors mt-2"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}