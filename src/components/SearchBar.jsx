import './SearchBar.css';
import { useState } from "react";
import { DatePicker, Space } from 'antd';

const SearchBar = (props) => {

    const [inpVal, setInpVal] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');

    const onChangeEnd = (date, dateString) => {
        setYearEnd(dateString);
        //console.log(date, dateString);
    };

    const onChangeStart = (date, dateString) => {
        setYearStart(dateString);
        //console.log(date, dateString);
    };


    return (
        <div className='search-bar'>
            {/* <Form> сюды валидацию от формика или еще какую - обязательные поля и что там еще */}
            <input name="search" onChange={(event) => setInpVal(event.target.value)} value={inpVal} />
            {/* <input type="number" name="yearStart" onChange={(event) => setYearStart(event.target.value)} value={yearStart} />
            <input type="number" name="yearEnd" onChange={(event) => setYearEnd(event.target.value)} value={yearEnd} /> */}
            <DatePicker onChange={onChangeStart} picker="year" placeholder="Select start year.." />
            <DatePicker onChange={onChangeEnd} picker="year" placeholder="Select end year.." />
            <button onClick={() => props.handleSubmit(inpVal, yearStart, yearEnd)}>Let`s search</button>
            {/* </Form> */}
        </div>
    )
}

export default SearchBar;