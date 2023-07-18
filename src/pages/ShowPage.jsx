import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { fetchCollection } from '../api';
import '../css/ImageShow.css';

function ShowPage() {
    
    const location = useLocation();
    const data = location.state ? location.state.data : '';
    const [image, setImage] = useState('');

    const handleCollection = async (nasa_id) => {

        let result = await fetchCollection(nasa_id);

        setImage(location.state ? result[0] : '');
    }

    useEffect(() => { handleCollection(data) }, []);

    return (<>

        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" component={Link} to='/' sx={{ mr: 2 }}  ><ArrowBack /></IconButton>
        <div className="card-container-show">
            <div className="card-title">
                <h4>{location.state ? location.state.title : 'No data, search or "view more" first'}</h4>
            </div>
            <div className="image-container">
                <img src={image} alt={location.state ? location.state.title : ''} />
            </div>
            <div className="card-content">

                <div className="card-body">
                    <p>{location.state ? location.state.location : ''}</p>
                    <p>{location.state ? location.state.name : ''}</p>
                    <p>{location.state ? location.state.description : ''}</p>
                    <p>{location.state ? Array.isArray(location.state.keywords) ? location.state.keywords.toString() : location.state.keywords: ''}</p>
                    <p>{location.state ? location.state.date : ''}</p>
                </div>
            </div>
        </div>
    </>
    )

}
export default ShowPage;