export default function BoxEmployment({id, company, logo, newCompany, featured, position, role, level, postedAt, contract, location, languages, tools}) {
    return(
        <div key={id} className="flex flex-row justify-between gap-4 p-5 rounded-md border-l-4 border-l-transparent hover:border-l-[var(--color-green-400)] duration-300 rounded-l-md shadow-[0_20px_20px_rgba(93,164,164,.15)] bg-white ">
            <div className="flex flex-row gap-4 items-center">
                <img src={logo} alt={company} className="h-18 w-18 rounded-full" />
                <div className="flex flex-col items-start gap-y-2">
                    <div className="flex items-center gap-2">
                        <p className="text-xl text-[var(--color-green-400)] font-bold">{company}</p>
                        {newCompany ? <p className="bg-[var(--color-green-600)] text-white py-1 px-3 uppercase rounded-full text-sm">New!</p> : ''}
                        {featured ? <p className="bg-[var(--color-green-900)] text-white py-1 px-3 uppercase rounded-full text-sm">Featured</p> : ''}
                    </div>
                    <p className="text-[var(--color-green-900)] text-2xl font-bold duration-300 cursor-pointer hover:text-[var(--color-green-400)]">{position}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-[var(--color-gray-400)] text-lg">{postedAt}</p>
                        <p className="text-[var(--color-gray-400)] text-lg">.</p>
                        <p className="text-[var(--color-gray-400)] text-lg">{contract}</p>
                        <p className="text-[var(--color-gray-400)] text-lg">.</p>
                        <p className="text-[var(--color-gray-400)] text-lg">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}