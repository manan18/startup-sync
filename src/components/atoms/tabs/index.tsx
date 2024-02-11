import React from "react";

interface TabProps {
  tabs: { label: string; id: number }[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const Tabs: React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }) => {
  console.log({ activeTab });
  return (
    <div className={`grid grid-cols-${tabs.length} text-lg`}>
      {tabs.map((tab) => {
        return (
          <button
            key={tab.id}
            className={` p-2
            ${
              activeTab === tab.id
                ? "font-semibold border-b-2 border-indigo-500"
                : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
