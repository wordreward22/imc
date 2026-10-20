"use client";

import React from "react";
import Image from "next/image";

interface MediaFeatureListProps {
  title: string;
  accentWord?: string;
  intro?: string;
  image: string;
  items: Array<{ title: string; desc?: string } | string>;
  reverse?: boolean;
}

export const MediaFeatureList: React.FC<MediaFeatureListProps> = ({
  title,
  accentWord,
  intro,
  image,
  items,
  reverse = false,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Media Image Column */}
          <div
            className={`lg:col-span-6 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="relative h-80 sm:h-96 md:h-[440px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-neutral-900">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* List Content Column */}
          <div
            className={`space-y-6 lg:col-span-6 ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading leading-tight uppercase">
                {title} {accentWord && <span className="text-[#E2231B]">{accentWord}</span>}
              </h2>
              {intro && (
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-3">
                  {intro}
                </p>
              )}
            </div>

            {/* Numbered Items */}
            <div className="space-y-4 pt-2">
              {items.map((item, idx) => {
                const itemTitle = typeof item === "string" ? item : item.title;
                const itemDesc = typeof item === "string" ? null : item.desc;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E2231B] text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 text-base font-heading">
                        {itemTitle}
                      </h3>
                      {itemDesc && (
                        <p className="text-neutral-600 text-xs sm:text-sm mt-1 leading-relaxed">
                          {itemDesc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
