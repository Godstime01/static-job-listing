import { FilterContext } from "../App"
import { useContext, useRef } from "react"

const JobListing = (props) => {

    const {_, func} = useContext(FilterContext);

    const featured = props.featured ? "border-l-4 border-cyan-400" : 'border-none'

    return (
        <div className={`bg-[white] w-[100%] shadow-lg shadow-cyan-400/25 rounded-md p-5 my-4 flex flex-col gap-3 md:flex-row items-start md:items-center ${featured} relative`}>

            <div>
                <img src={props.logo} alt={`${props.company} logo`} className="absolute top-0 md:static -translate-y-10 md:-translate-y-0" />
            </div>
            <div className="flex-1 pt-12 md:pt-0 grid gap-3">
                <div className="flex gap-2 my-2 md:my-0">
                    <p className="text-cyan-400 text-2xl font-bold">{props.company}</p>
                    {props.new && <span className="bg-cyan-400 text-cyan-100 font-bold px-2 rounded-full">new</span>}
                    {props.featured && <span className="bg-[#333] text-cyan-100 font-bold rounded-full px-2">featured</span>}
                </div>
                <h2 className="text-cyan-500 font-bold text-2xl md:text-4xl">{props.position}</h2>

                <div className="flex gap-2">
                    <span className="text-cyan-500/70 font-small">{props.postedAt}</span>
                    <span className="text-cyan-500/70 font-small">{props.contract}</span>
                    <span className="text-cyan-500/70 font-small">{props.location}</span>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap border-t md:border-none pt-4 md:pt-0 gap-2">
                {
                    [props.role, ...props.tools, ...props.languages].map(item => {
                        return <button
                            // ref={btnRef}
                            onClick={(e) => func({type: "ADD_FILTER", payload: e.target.innerText})}
                            className="px-2 py-2 rounded-md bg-cyan-400/10 text-cyan-400 font-extrabold ">
                            {item}
                        </button>
                    })
                }
            </div>

        </div>
    )
}

export default JobListing