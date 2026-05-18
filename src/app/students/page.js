"use client";

import { useState } from "react";
import Link from "next/link";
import data from "../../utils/data.json";

export default function Homepage() {
  const [query, setQuery] = useState("");

  const filtered = data.filter((student) => {
    const full = `${student.firstname} ${student.lastname}`.toLowerCase();
    return full.includes(query.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-stone-100 px-6 py-10">

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8 flex gap-2">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 px-3 py-2 border rounded-md w-full"
      />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="px-4 py-2.5 rounded-xl bg-stone-200 text-stone-600 text-sm hover:bg-stone-300 transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* No results */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 gap-2 text-stone-400">
          <span className="text-4xl">🔍</span>
          <p className="text-base font-medium">No one found</p>
          <p className="text-sm">Try searching with a different name</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 flex flex-col gap-3"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden bg-stone-100 aspect-square w-full">
              <img
                src={student.image}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <div className="flex items-start justify-between gap-1">
              <span className="font-semibold text-stone-800 text-sm leading-tight">
                {student.firstname}
              </span>
              <span className="text-[11px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                {student.lastname}
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-1 text-xs text-stone-500">
              <span>{student.job}</span>
              <span>{student.Height} cm</span>
              {student.age && <span>{student.age} yrs</span>}
              {student.email && (
                <span className="truncate" title={student.email}>
                  {student.email}
                </span>
              )}
            </div>

            {/* Items */}
            <div className="flex gap-2 pt-2 border-t border-stone-100">
              {(student.items ?? []).map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      title={item.name}
                    />
                  </div>
                  <span className="text-[9px] text-stone-400">{item.name}</span>
                </div>
              ))}
            </div>

            <span className="text-[10px] text-stone-300">#{student.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}