import axios from 'axios';

const searchImages = async (term, yearStart, yearEnd) => {

    let fetchURL = '';
    if (yearStart === "" && yearEnd === "")
        fetchURL = `https://images-api.nasa.gov/search?q=${term}&media_type=image`;
    else if (yearStart === "")
        fetchURL = `https://images-api.nasa.gov/search?q=${term}&year_end=${yearEnd}&media_type=image`;
    else if (yearEnd === "")
        fetchURL = `https://images-api.nasa.gov/search?q=${term}&year_start=${yearStart}&media_type=image`;
    else
        fetchURL = `https://images-api.nasa.gov/search?q=${term}&year_start=${yearStart}&year_end=${yearEnd}&media_type=image`;

    try {
        const response = await axios.get(fetchURL);                
        return response.data.collection.items;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }

        console.log('Fetching...');
    }

};

const fetchMetadata = async (nasa_id) => {    

    try {
        const response = await axios.get(`http://images-assets.nasa.gov/image/${nasa_id}/metadata.json`);

        return response.data;

    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }

        console.log('Fetching...');
    }

}

const fetchCollection = async (nasa_id) => {
    try {
        const response = await axios.get(`http://images-assets.nasa.gov/image/${nasa_id}/collection.json`);

        return response.data;

    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }

        console.log('Fetching...');
    }
}

export { searchImages, fetchMetadata, fetchCollection };