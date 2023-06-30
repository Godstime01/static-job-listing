import { useContext, useState } from "react";
import { FilterContext } from "../App";
import FilterComponent from "./FilterComponent"
import JobListing from "./JobListing"
import data from "../data/data.json"

import dBackground from "../assets/images/bg-header-desktop.svg";
import mBackground from "../assets/images/bg-header-mobile.svg";

const JobListingPage = () => {

    const { list, _ } = useContext(FilterContext);
    const [displayList, setDisplayList] = useState()

    function filters(){
        for( var i = 0; i < list.length; i++){
            let filter = list[i]
            console.log(filter)
            var filterList = data.filter(item => item.role.toLowerCase() === filter.toLowerCase())    
            // setDisplayList([...filterList])       
        }
        console.log(filterList)
    }

    filters()

    return (
        <div className="grid grid-rows-[150px_1fr] h-screen">
            <header className="bg-cyan-400">
                <img src={dBackground} alt="" className="w-full h-full" />
            </header>
            <main>
                {list.length > 0 && <FilterComponent filters={list} />}

                <div className="container pt-10 mx-auto px-10 grid gap-7 md:gap-3">
                    {
                        list.length <= 0 ?
                            data.map((joblist) => {
                                return <JobListing
                                    key={joblist.id}
                                    id={joblist.id}
                                    company={joblist.company}
                                    logo={joblist.logo}
                                    new={joblist.new}
                                    featured={joblist.featured}
                                    position={joblist.position}
                                    role={joblist.role}
                                    level={joblist.level}
                                    postedAt={joblist.postedAt}
                                    contract={joblist.contract}
                                    location={joblist.location}
                                    languages={joblist.languages}
                                    tools={joblist.tools}
                                />
                            }) :
                            null
                            // filters()
                        }
                </div>
            </main>
        </div>
    )
}

export default JobListingPage