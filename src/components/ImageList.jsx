import { useEffect, useState } from 'react';
import './ImageList.css';
import ImageShow from './ImageShow';

const ImageList = (props) => {
    
    const [flag, setFlag] = useState(true);    

    useEffect(() => {setFlag(!flag)}, [props.termFromInput]);
    //years too

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
            console.log('uaua');
            props.handleMetadata(image.data[0].nasa_id);
            setFlag(false);
        }
        
        //console.log(props.metadata);
        //console.log(props.metadata['AVAIL:Location']);
        //console.log(props.metadata['AVAIL:NASAID']);

        let nasaId = '';
        //let availTitle = '';

        if(props.metadata){
            //console.log(props.metadata);
            for(let elem of props.metadata){
                if(elem['AVAIL:NASAID'] == image.data[0].nasa_id){
                    nasaId = elem['AVAIL:NASAID'];
                    console.log(nasaId);
                    //availTitle = elem['AVAIL:Title'];
                }
            }
        }        

        return  <ImageShow title={title} location={nasaId} photogrName={props.metadata['AVAIL:Photographer']} imageUrl={imageUrl} key={image.href} />
    });    

    return (
        <div className='image-list'>
            {renderedImages}
        </div>
    )
}

export default ImageList;