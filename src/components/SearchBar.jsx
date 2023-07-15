import './SearchBar.css';
import { useState } from "react";

const SearchBar = (props) => {

    const [inpVal, setInpVal] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');


    return (
        <div className='search-bar'>
            <input name="search" onChange={(event) => setInpVal(event.target.value)} value={inpVal} />
            <input type="number" name="yearStart" onChange={(event) => setYearStart(event.target.value)} value={yearStart} />
            <input type="number" name="yearEnd" onChange={(event) => setYearEnd(event.target.value)} value={yearEnd} />
            <button onClick={() => props.handleSubmit(inpVal, yearStart, yearEnd)}>Let`s search</button>
        </div>
    )
}

export default SearchBar;