import './ImageList.css';
import ImageShow from './ImageShow';

const ImageList = (props) => {

    const renderedImages = props.images.map(function(image){
        //console.log(image.links[0].href);
        let imageUrl = '';
        if(image.links[0]){
            imageUrl = image.links[0].href;
        }
        return <ImageShow title='Super title' location='ento tuta' photogrName='Opov' imageUrl={imageUrl} key={image.href} />
    });

    return (
        <div className='image-list'>
            {/* I skolko je ikh: {props.images.length} */}
            {renderedImages}            
        </div>
    )
}

export default ImageList;