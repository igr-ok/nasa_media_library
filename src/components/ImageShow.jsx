import './ImageShow.css';

const ImageShow = (props) => {

    // let toShow = 'https://picsum.photos/200';

    // let preStr = '';

    // if(props.imageUrl.links[0]){
    //     preStr = props.imageUrl.links[0].href;
    // }    

    // if(preStr.startsWith('https') && preStr.endsWith('.jpg')){
    //     toShow = preStr;
    // }

    // console.log(toShow);

    return (
        <div className="card-container">
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="image-container">
                <img src={props.imageUrl} alt={props.imageUrl.alt_description} />
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