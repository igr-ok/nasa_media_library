import {React, useState, useEffect} from 'react';
import {Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Image from 'mui-image';
import { fetchCollection } from '../api';


function ShowPage () {
  const location = useLocation();
  const data = location.state.data;  
  const [image, setImage] = useState('');

const handleCollection = async (nasa_id) => {

    let result = await fetchCollection(nasa_id);    

    setImage(result[0]);
}

useEffect(() => {handleCollection(data)}, []);

    return (
      <div>
        <AppBar position="relative" color="primary">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    component={Link}
                    to='/'
                >
                    <ArrowBack />
                </IconButton>
                <div>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Title : {location.state.title}
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Location : {location.state.location}
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Photographer : {location.state.name}
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    width="90vw"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Description : {location.state.description}
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    width="90vw"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Keywords : {Array.isArray(location.state.keywords) ? location.state.keywords.toString() : location.state.keywords}
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Date : {location.state.date}
                </Typography>
                </div>
            </Toolbar>
        </AppBar>
        <Image
          width="100%"
          src={image}
        />
      </div>
    )
}
export default ShowPage;