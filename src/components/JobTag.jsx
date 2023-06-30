import removeIcon from "../assets/images/icon-remove.svg";
import { useContext } from "react";
import { FilterContext } from "../App";


const JobTag = (props) => {

    const {_, func} = useContext(FilterContext);

    return (
        <span className='rounded p-2 text-cyan-400 bg-cyan-400/20 font-bold flex items-center gap-2 w-auto '>
            <span>{props.item}</span>
            <button 
            onClick={() => func({type: "REMOVE_FILTER", payload: props.item})}
            className="cursor-pointer">
                <img src={removeIcon} alt="remove icon" />
            </button>
        </span>
    )
}

export default JobTag