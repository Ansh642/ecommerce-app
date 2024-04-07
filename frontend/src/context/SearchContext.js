import { useState, createContext } from "react";

export const SearchContext = createContext();
    
export function SearchProvider({children}){

    const [search, setsearch] = useState({
        keywords : "",
        result : [],
    });

    const value={
        search,setsearch,
    }
    
    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>

}

