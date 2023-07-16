import {searchImages, fetchMetadata} from './api';
import SearchBarMain from './components/SearchBarMain';
import ImageList from './components/ImageList';
import { useState } from 'react';

const App = () => {

    const [images, setImages] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [termFromInput, setTermFromInput] = useState({});
    
    const handleSubmit = async (term, yearStart, yearEnd) => {

        let result = await searchImages(term, yearStart, yearEnd);        
        
        setImages(result);
        setTermFromInput({
          term,
          yearStart,
          yearEnd
        });
    }

    const handleMetadata = async (nasa_id) => {
      
      let result = await fetchMetadata(nasa_id);      

      if(images){        
        setMetadata((prev) => {
          return [...prev, result];
        });        
      }      
    }    

    return (
        <div>
            <SearchBarMain handleSubmit={handleSubmit} />
            <ImageList termFromInput={termFromInput} handleMetadata={handleMetadata} images={images} metadata={metadata} />
        </div>
    )
}

export default App;