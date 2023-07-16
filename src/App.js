import {searchImages, fetchMetadata} from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { useState } from 'react';

const App = () => {

    const [images, setImages] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [termFromInput, setTermFromInput] = useState('');
    //const [nasaId, setNasaId] = useState([]);

    const handleSubmit = async (term, yearStart, yearEnd) => {

        let result = await searchImages(term, yearStart, yearEnd);

        //console.log(result);
        
        setImages(result);
        setTermFromInput(term);
    }

    const handleMetadata = async (nasa_id) => {
      
      let result = await fetchMetadata(nasa_id);

      //console.log(result['AVAIL:NASAID']);

      if(images){        
        setMetadata((prev) => {
          return [...prev, result];
        });
        //setMetadata(result);
      }      
    }    

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} />
            <ImageList termFromInput={termFromInput} handleMetadata={handleMetadata} images={images} metadata={metadata} />
        </div>
    )
}

export default App;