import React from "react";

const TNavbar = () => {
  return (
    <div>
      <div className="heading flex">
        <div className="flex flex-col">Expense Summary</div>
        <div>
          Track & manage your spending with ease. Overview of your spending by
          category, document type and more.
        </div>
      </div>
      <div className="button">
        <button>Export .CSV</button>
      </div>
    </div>
  );
};

export default TNavbar;
