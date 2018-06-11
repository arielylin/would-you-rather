import React from "react";

const Nav = ({ activeTab, onTabChange }) => (
  <ul className="tabs">
    <li className={`tab-unanswered ${activeTab === 0 && "selected"}`}>
      <a onClick={() => onTabChange(0)}>Unanswered</a>
    </li>
    <li className={`tab-answered ${activeTab === 1 && "selected"}`}>
      <a onClick={() => onTabChange(1)}>Answered</a>
    </li>
  </ul>
);

export default Nav;
