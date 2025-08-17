import FilterContext from "@context/FilterContext"
import { useContext } from "react";

export default function Filter() {

    const {filter, removeFilter, clearFilter} = useContext(FilterContext);

    return (
        <>
        {filter.length > 0 ? (
            <div className="-mt-10 mb-10 md:mb-0 rounded-md bg-white flex flex-row flex-wrap items-center justify-between gap-4 shadow-[0_20px_20px_rgba(93,164,164,.15)] p-5">
                <div className="flex flex-row items-center gap-4 flex-wrap ">
                    {filter.map(item => 
                        <button onClick={() => removeFilter(item)} className="group cursor-pointer text-[var(--color-green-400)] bg-[var(--color-green-50)] text-md rounded-md flex flex-row items-center">
                            <span className="px-4">{item}</span>
                            <span className="bg-[var(--color-green-400)] group-hover:bg-[var(--color-green-900)] duration-300 p-2 rounded flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-white h-5 w-5"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                                    />
                                </svg>
                            </span>
                        </button>
                    )}
                </div>
                <button onClick={() => clearFilter()} className="underline text-[var(--color-green-400)] cursor-pointer hover:text-[var(--color-green-900)] duration-300">Clear</button>
            </div>
        ) : ''}
        </>
    )
}