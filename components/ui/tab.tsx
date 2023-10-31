"use client";

import { useState } from "react";
import { Product, Tab } from "@/types";
import { dummyProductData } from "@/lib/constants";

export default function Tabset({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs: Tab[] = [
    {
      id: "tab1",
      label: "Product Description",
      content: <p>{product.description}</p>,
    },

    {
      id: "tab2",
      label: "Related Products",
      content: <p>{dummyProductData}</p>,
    },
    {
      id: "tab3",
      label: "Rating and Reviews",
      content: <p>{dummyProductData}</p>,
    },
  ];

  return (
    <div>
      <div className="bg-sescondaryGray rounded-lg p-2">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                tab.id === activeTab
                  ? "bg-bannerBlue text-white"
                  : "bg-transparent text-gray-700"
              } px-4 py-2 rounded-md`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="m-4 p-2">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
