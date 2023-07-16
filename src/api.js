import axios from 'axios';

const searchImages = async (term, yearStart, yearEnd) => {
    //try catch here
   const response = await axios.get('https://images-api.nasa.gov/search', {
    headers: {
        
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

const fetchMetadata = async (nasa_id) => {

    const response = await axios.get(`http://images-assets.nasa.gov/image/${nasa_id}/metadata.json`);

    //console.log(response.data['AVAIL:Location']);
    //console.log(response.data['AVAIL:Photographer']);

    //console.log(response.data);

    return response.data;

}

export {searchImages, fetchMetadata};