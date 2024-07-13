import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import PageTitle from "./PageTitle";

const Header: React.FC = () => {
  const pageTitle = "Acidente Zero";

  return (
    <header className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 shadow-lg">
      <Navigation />
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Logo />
          <PageTitle title={pageTitle} />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <Search />
          <UserMenu />
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
