import { searchImages, fetchMetadata } from '../api';
import SearchBarMain from '../components/SearchBarMain';
import ImageList from '../components/ImageList';
import { useState } from 'react';


const SearchPage = () => {

    const [images, setImages] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [termFromInput, setTermFromInput] = useState({});
    const [emptyResults, setEmptyresults] = useState(null);

    const handleSubmit = async (term, yearStart, yearEnd) => {

        let result = await searchImages(term, yearStart, yearEnd);

        if(result.length !== 0){
            setEmptyresults(null);
            setImages(result);
            setTermFromInput({
                term,
                yearStart,
                yearEnd
            });
        } else {
            setEmptyresults(<h3>No matching results, try something cosmic.. </h3>)
        }
        
    }

    const handleMetadata = async (nasa_id) => {

        let result = await fetchMetadata(nasa_id);

        if (images) {
            setMetadata((prev) => {
                return [...prev, result];
            });
        }
    }

    return (
        <div>
            <SearchBarMain handleSubmit={handleSubmit} />
            {emptyResults ? emptyResults : <ImageList termFromInput={termFromInput} handleMetadata={handleMetadata} images={images} metadata={metadata} />}
        </div>
    )
}

export default SearchPage;