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
        filterEmployes();
    }

    const removeFilter = (value) => {
        setFilter(prev => prev.filter(item => item !== value));
        filterEmployes();
    }

    const clearFilter = () => {
        setFilter([]);
    }

    useEffect(() => {
        if(filter.length > 0) {
            setEmployes(prev => 
                prev.filter(item => 
                    item.languages.some(lang => filter.includes(lang))
                )
            );
        } else {
            setEmployes(Data);
        }
    }, [filter]);

    console.log(employes);

    return (
        <FilterContext.Provider value={{employes, filter, addFilter, removeFilter, clearFilter}}>
            {children}
        </FilterContext.Provider>
    )
}