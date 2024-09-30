"use client";

import { useState } from "react";
import { SearchDashboard } from "./_components/search-dashboard";
import { TemplateList } from "./_components/template-list";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined); // Ensure it's either string or undefined

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <TemplateList searchInput={searchInput} /> {/* Remove 'as string' */}
    </div>
  );
};

export default Dashboard;
