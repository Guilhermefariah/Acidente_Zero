import React from "react";
import styles from './styles/Header.module.css';
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center space-x-4">
                        <Search />
                    </div>
                </div>
            </div>
            <Menu />
        </header>
    )
}

export default Header;