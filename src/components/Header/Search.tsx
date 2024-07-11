import React from "react";

const Search: React.FC = () => {
    return (
        <div className="relative">
            <input 
                type="text"
                placeholder="Pesquisar..."
                className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2">
                
            </button>
        </div>
    );
}

export default Search;