"use client";

import { useState } from "react";
import data from "../../utils/teacher.json";

export default function Homepage() {
  const [query, setQuery] = useState("");

  const filtered = data.filter((student) => {
    const full = `${student.firstname} ${student.lastname}`.toLowerCase();
    return full.includes(query.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 px-3 py-2 border rounded-md w-full"
      />
      <div className="min-h-screen bg-stone-50 px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col gap-2">

              {/* Teacher avatar */}
              <img
                src={student.image}
                alt={student.firstname}
                className="w-14 h-14 rounded-full object-cover bg-stone-100"
                onError={(e) => {
                  e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(student.firstname)}`;
                }}
              />

              <div>
                <p className="font-semibold text-stone-800 text-sm leading-tight">
                  {student.firstname}
                </p>
                <p className="text-xs text-stone-400">{student.lastname}</p>
              </div>

              <div className="flex flex-col gap-1 text-xs text-stone-500">
                <span>{student.job}</span>
                <span>{student.Height} cm</span>
                {student.age && <span>Нас {student.age}</span>}
                {student.email && (
                  <span className="truncate" title={student.email}>
                    {student.email}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-stone-100">
                <span className="text-xs text-stone-500 font-medium w-full mb-0.5">
                  Items
                </span>
                {student.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-1 bg-stone-100 text-stone-600 text-xs px-2 py-0.5 rounded-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>

              <span className="text-[10px] text-stone-300">#{student.id}</span>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-stone-400 mt-10">No users found.</p>
        )}
      </div>
    </>
  );
}