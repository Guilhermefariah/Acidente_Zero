import React from "react";
import { FiSearch } from "react-icons/fi";

const Search: React.FC = () => {
    return (
        <div className="relative flex items-center">
            <input 
                type="text"
                placeholder="Pesquisar..."
                className="px-3 py-2 pl-10 border border-gray-200 font-serif rounded-md focus:outline-none focus:border-gray-600 w-full md:w-auto"
            />
            <button className="absolute left-0 top-0 h-full flex items-center pl-2 text-gray-600">
                <FiSearch size={20}/>
            </button>
        </div>
    );
}

export default Search;
