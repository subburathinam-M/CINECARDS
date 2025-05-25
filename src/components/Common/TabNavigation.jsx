

const TabNavigation = ({ tabs, activeTab, onTabChange}) => {
  return (
    <div className="flex items-start gap-2 overflow-x-auto pb-2 scrollbar-hide -ml-2">
      {/* Tabs */}
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
