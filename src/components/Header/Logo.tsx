import React from "react";
import { FaTrafficLight } from "react-icons/fa";

const Logo: React.FC = () => {
    return (
        <div className="flex items-center">
            <FaTrafficLight size={50} className="text-gray-600 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
        </div>
    );
}

export default Logo;
