import { Link } from 'react-router-dom';
import './ImageShow.css';

const ImageShow = (props) => {
    
    let noLocation = 'Unknown location';
    let noPhotograph = 'Unknown photographer';

    return (
        <div className="card-container">
            <div className="card-title">
                <h4>{props.title}</h4>
            </div>
            <div className="image-container">
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="card-content">

                <div className="card-body">
                    <p>{props.location ? props.location : noLocation}</p>
                    <p>{props.photogrName ? props.photogrName : noPhotograph}</p>
                </div>
            </div>
            <div className="btn">
                <Link to="/show" state={{
                    data: props.nasa_id, 
                    title: props.title, 
                    location: props.location,
                    name: props.photogrName,
                    description: props.description,
                    keywords: props.keywords, 
                    date: props.date,
                     }}>View more</Link>
            </div>
            
        </div>
    )
}

export default ImageShow;