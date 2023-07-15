import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { useState } from 'react';

const App = () => {

    const [images, setImages] = useState([]);
    const [metadata, setMetadata] = useState([]);

    const handleSubmit = async (term, yearStart, yearEnd) => {

        let result = await searchImages(term, yearStart, yearEnd);
        
        setImages(result);
    }
    
    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App;