import { useEffect, useState } from 'react';
import './ImageList.css';
import ImageShow from './ImageShow';

const ImageList = (props) => {
    
    const [flag, setFlag] = useState(true);    

    useEffect(() => {setFlag(!flag)}, 
    [props.termFromInput.term, props.termFromInput.yearStart, props.termFromInput.yearEnd]);
    
    const renderedImages = props.images.map(function (image) {

        let imageUrl = '';
        if (image.links[0]) {
            imageUrl = image.links[0].href;
        }

        let title = '';
        if (image.data[0]) {
            title = image.data[0].title;
        }

        if (image.data[0].nasa_id && flag) {            
            props.handleMetadata(image.data[0].nasa_id);
            setFlag(false);
        }        
        
        let location = '';
        let photogrName = '';

        if(props.metadata){            
            for(let elem of props.metadata){
                if(elem !== undefined && elem['AVAIL:NASAID'] && elem['AVAIL:NASAID'] === image.data[0].nasa_id){
                    location = elem['AVAIL:Location'];
                    photogrName = elem['AVAIL:Photographer'];                    
                }
            }
        }        

        return  <ImageShow title={title} location={location} photogrName={photogrName} imageUrl={imageUrl} key={image.href} />
    });    

    return (
        <div className='image-list'>
            {renderedImages}
        </div>
    )
}

export default ImageList;