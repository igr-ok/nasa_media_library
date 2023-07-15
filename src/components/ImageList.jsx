import './ImageList.css';
import ImageShow from './ImageShow';

const ImageList = (props) => {

    const renderedImages = props.images.map(function(image){
        
        let imageUrl = '';
        if(image.links[0]){
            imageUrl = image.links[0].href;
        }

        let title = '';
        if(image.data[0]){
            title = image.data[0].title;
        }
        return <ImageShow title={title} location='ento tuta' photogrName='Opov' imageUrl={imageUrl} key={image.href} />
    });

    return (
        <div className='image-list'>
            {/* I skolko je ikh: {props.images.length} */}
            {renderedImages}            
        </div>
    )
}

export default ImageList;