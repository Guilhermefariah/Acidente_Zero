import React from "react";
import styles from './styles/Header.module.css';
import Logo from "./Logo";


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                </div>
            </div>
        </header>
    )
}

export default Header;