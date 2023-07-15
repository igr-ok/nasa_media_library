import './ImageShow.css';

const ImageShow = (props) => {    

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
                    <p>{props.location}</p>
                    <p>{props.photogrName}</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a>
                        View more
                    </a>
                </button>
            </div>
        </div>
    )
}

export default ImageShow;