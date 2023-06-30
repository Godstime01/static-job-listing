import JobTag from "./JobTag"
import { useContext } from "react"
import { FilterContext } from "../App"


const FilterComponent = (props) => {

  const {_, func} = useContext(FilterContext);


  return (
    <aside className='shadow-lg shadow-cyan-400/20 absolute flex flex-col sm:flex-row px-10 py-6 left-1/2 w-full md:w-[60rem] -translate-x-1/2 -translate-y-10 z-10 bg-cyan-100 rounded-sm'>
      <div className="flex-1 flex gap-2 bg-cyan-100">
        {
          props.filters.map(item => {
            return <JobTag item={item} />
          })
        }
      </div>
      <button
        onClick={() => func({ type: "CLEAR" })}
        className='text-cyan-400 capitalize hover:underline cursor-pointer'>
        clear
      </button>
    </aside>
  )
}

export default FilterComponent