"use client";

import Link from "next/link";
import React from "react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
      <ol className="flex items-center gap-2">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {!isLast && it.href ? (
                <Link href={it.href} className="hover:underline">
                  {it.label}
                </Link>
              ) : (
                <span className={isLast ? "text-gray-800 font-medium" : ""}>
                  {it.label}
                </span>
              )}

              {!isLast && <span className="text-gray-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
