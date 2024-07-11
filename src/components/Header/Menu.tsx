import React, { useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Menu: React.FC = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex items-center justify-center md:jus space-x-4">
            {/* Itens do menu */}
        </div>
    );
}
export default Menu;