import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";

const Search: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const iconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="relative flex items-center">
            <input 
                type="text"
                placeholder="Pesquisar..."
                ref={inputRef}
                className="px-2 py-2 pl-10 border text-gray-600 border-gray-200 font-serif rounded-md focus:outline-none focus:border-gray-400 w-full md:w-auto"
            />
            <button 
                type="button"
                onClick={iconClick}
                className="absolute left-0 top-0 h-full flex items-center pl-2 text-gray-900"
            >
                <FiSearch size={20}/>
            </button>
        </div>
    );
}

export default Search;
