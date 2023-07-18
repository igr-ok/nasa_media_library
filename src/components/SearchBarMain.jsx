import '../css/SearchBar.css';
import { useState } from "react";
import { DatePicker, Button, Input } from 'antd';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchBarMain(props) {

    const SearchBar = () => {

        const [inpVal, setInpVal] = useState('');
        const [yearStart, setYearStart] = useState('');
        const [yearEnd, setYearEnd] = useState('');
        const { enqueueSnackbar } = useSnackbar();

        const onChangeInp = (event) => {
            setInpVal(event.target.value);
            localStorage.removeItem('nasa_collection_items');
        }

        const onChangeEnd = (date, dateString) => {
            setYearEnd(dateString);
            localStorage.removeItem('nasa_collection_items');
        };

        const onChangeStart = (date, dateString) => {
            setYearStart(dateString);
            localStorage.removeItem('nasa_collection_items');
        };

        const validationFunc = () => {

            localStorage.removeItem('nasa_collection_items');

            if (inpVal === "") {
                enqueueSnackbar('Input search word please', { variant: "error" });
                return 0;
            }
            else if (yearEnd < yearStart) {
                enqueueSnackbar('End year can not be eailer than Start year', { variant: 'error' })
                return 0;
            }
            else if (yearEnd < 0 || yearStart < 0 || yearStart > new Date().getFullYear() || yearEnd > new Date().getFullYear()) {
                enqueueSnackbar('Put Year Correctly', { variant: 'error' });
                return 0;
            }
            else {
                console.log("fetch data");
                props.handleSubmit(inpVal, yearStart, yearEnd);
            }
        }

        return (
            <div className='search-bar'>                
                <Input className='input' name='search' onChange={onChangeInp} value={inpVal} placeholder="Let`s search the moon.." />
                <DatePicker onChange={onChangeStart} picker="year" placeholder="Select start year.." />
                <DatePicker onChange={onChangeEnd} picker="year" placeholder="Select end year.." />                
                <Button onClick={() => validationFunc()} type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
            </div>
        )
    }

    return (
        <SnackbarProvider maxSnack={3}>
            <SearchBar />
        </SnackbarProvider>
    );
};