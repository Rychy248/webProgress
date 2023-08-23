
export default function Avatar(props) {    
    return (
        <img
            className="circle-img"
            src={props.imgSrc}
            alt="avatar_img"
        />
    );
};