import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";


const Header: React.FC = () => {
    return (
        <header className="bg-gray-200 shadow-lg">
            <div className="container mx-auto py-4 px-4 md:px-0 flex flex-col md:flex-row justify-between items-center">
                <Logo />
                <Navigation />
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <Search />
                    <UserMenu />
                </div>
            </div>
            <Menu />
        </header>
    );
}

export default Header;
