import { useContext } from "react"
import FilterContext from "@context/FilterContext"

export default function CardEmployment({id, company, logo, newCompany, featured, position, role, level, postedAt, contract, location, languages, tools}) {

    const {filter, addFilter} = useContext(FilterContext);

    return (
        <div key={id} className="mb-10 md:mb-0 flex flex-row justify-between gap-4 p-5 rounded-md border-l-4 border-l-transparent hover:border-l-[var(--color-green-400)] duration-300 rounded-l-md shadow-[0_20px_20px_rgba(93,164,164,.15)] bg-white w-full">
            <div className="flex flex-row flex-wrap gap-4 items-center justify-between w-full">
                <div className="flex flex-row flex-wrap gap-4 items-center relative w-full md:w-auto">
                    <img src={logo} alt={company} className="absolute top-[-50px] md:top-0 md:relative h-18 w-18 rounded-full" />
                    <div className="mt-10 md:mt-0 flex flex-col items-start gap-y-2 w-full md:w-auto">
                        <div className="flex items-center gap-2 flex-wrap gap-2">
                            <p className="text-xl text-[var(--color-green-400)] font-bold">{company}</p>
                            {newCompany ? <p className="bg-[var(--color-green-600)] text-white py-1 px-3 uppercase rounded-full text-sm">New!</p> : ''}
                            {featured ? <p className="bg-[var(--color-green-900)] text-white py-1 px-3 uppercase rounded-full text-sm">Featured</p> : ''}
                        </div>
                        <p className="text-[var(--color-green-900)] text-2xl font-bold duration-300 cursor-pointer hover:text-[var(--color-green-400)]">{position}</p>
                        <div className="flex flex-wrap items-center gap-2 pb-4 border-b-2 border-[var(--color-gray-400)] w-full md:border-none">
                            <p className="text-[var(--color-gray-400)] text-lg">{postedAt}</p>
                            <p className="text-[var(--color-gray-400)] text-lg">.</p>
                            <p className="text-[var(--color-gray-400)] text-lg">{contract}</p>
                            <p className="text-[var(--color-gray-400)] text-lg">.</p>
                            <p className="text-[var(--color-gray-400)] text-lg">{location}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-start gap-2 flex-wrap">
                    <button onClick={() => addFilter(role)} key={role} className={`bg-[var(--color-green-50)] hover:bg-[var(--color-green-600)] hover:text-white text-[var(--color-green-400)] duration-300 cursor-pointer py-1 px-3 uppercase rounded-md text-md ${filter.includes(role) ? 'bg-[var(--color-green-600)] text-white' : ''}`}>{role}</button>
                    <button onClick={() => addFilter(level)} key={level} className={`bg-[var(--color-green-50)] hover:bg-[var(--color-green-600)] hover:text-white text-[var(--color-green-400)] duration-300 cursor-pointer py-1 px-3 uppercase rounded-md text-md ${filter.includes(level) ? 'bg-[var(--color-green-600)] text-white' : ''}`}>{level}</button>
                    {languages.map(lang => <button onClick={() => addFilter(lang)} key={lang} className={`bg-[var(--color-green-50)] hover:bg-[var(--color-green-600)] hover:text-white text-[var(--color-green-400)] duration-300 cursor-pointer py-1 px-3 uppercase rounded-md text-md ${filter.includes(lang) ? 'bg-[var(--color-green-600)] text-white' : ''}`}>{lang}</button>)}
                </div>
            </div>
        </div>
    )
}