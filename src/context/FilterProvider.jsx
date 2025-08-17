import { useState, useEffect } from "react";
import FilterContext from "@context/FilterContext";
import Data from "@lib/data.json";

export default function FilterProvider({children}) {
    
    const [filter, setFilter] = useState([]);
    const [employes, setEmployes] = useState(Data);

    const addFilter = (value) => {
        setFilter(prev => {
            if(prev.includes(value)) return prev.filter(item => item !== value);
            else return [...prev, value];
        });
    }

    const removeFilter = (value) => {
        setFilter(prev => prev.filter(item => item !== value));
    }

    const clearFilter = () => {
        setFilter([]);
    }

    useEffect(() => {
        if(filter.length > 0) {
            setEmployes(prev => 
                prev.filter(item => 
                    filter.includes(item.role) ||
                    item.languages.some(lang => filter.includes(lang)) ||
                    filter.includes(item.level)
                )
            );
        } else {
            setEmployes(Data);
        }
    }, [filter]);

    console.log(filter);

    return (
        <FilterContext.Provider value={{employes, filter, addFilter, removeFilter, clearFilter}}>
            {children}
        </FilterContext.Provider>
    )
}