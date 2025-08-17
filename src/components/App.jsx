import { useContext } from 'react'
import '@css/App.css'
import CardEmployment from '@components/CardEmployment';
import Filter from '@components/Filter';
import FilterContext from '@context/FilterContext';

function App() {

  const {employes} = useContext(FilterContext);

  return (
    <div class="bg-[var(--color-green-50)]">
    <div className='bg-[url(@img/bg-header-mobile.svg)] lg:bg-[url(@img/bg-header-desktop.svg)] h-[200px] bg-no-repeat bg-center bg-cover w-full bg-[var(--color-green-600)]'></div>
      <div className='md:w-full md:px-4 xl:w-[1440px] m-auto'>
        <Filter/>
        <div className="flex flex-col gap-y-5 py-10">
          {employes.map(item => 
            <CardEmployment
            id={item.id}
            company={item.company}
            logo={item.logo}
            newCompany={item.new}
            featured={item.featured}
            position={item.position}
            role={item.role}
            level={item.level}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
            languages={item.languages}
            tools={item.tools}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
