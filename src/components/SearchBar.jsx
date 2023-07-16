import './SearchBar.css';
import { useState } from "react";
import { DatePicker, Space } from 'antd';

const SearchBar = (props) => {

    const [inpVal, setInpVal] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');

    const onChangeEnd = (date, dateString) => {
        setYearEnd(dateString);        
    };

    const onChangeStart = (date, dateString) => {
        setYearStart(dateString);        
    };

    return (
        <div className='search-bar'>            
            <input name="search" onChange={(event) => setInpVal(event.target.value)} value={inpVal} />            
            <DatePicker onChange={onChangeStart} picker="year" placeholder="Select start year.." />
            <DatePicker onChange={onChangeEnd} picker="year" placeholder="Select end year.." />
            <button onClick={() => props.handleSubmit(inpVal, yearStart, yearEnd)}>Let`s search</button>            
        </div>
    )
}

export default SearchBar;