import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";


const Header: React.FC = () => {
    return (
        <header className="bg-gray-200 shadow-md">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <Logo />
                    <Navigation />
                    <div className="hidden md:flex items-center space-x-4">
                        <Search />
                        <UserMenu />
                    </div>
                </div>
            </div>
            <Menu />
        </header>
    );
}

export default Header;
