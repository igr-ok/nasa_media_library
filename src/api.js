import axios from 'axios';

const searchImages = async (term) => {
    //try catch here
   const response = await axios.get('https://images-api.nasa.gov/search', {
    headers: {
        //Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    },
    params: {
        q: term,
        media_type: "image",
        year_start: yearStart,
        year_end: yearEnd
    }
   });
   //console.log(response.data.collection.items);
   //if response 200 or something elese..
   return response.data.collection.items;
};

export default searchImages;