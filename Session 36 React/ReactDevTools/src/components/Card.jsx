import Avatar from "./Avatar";
import CardInfo from "./CardInfo";
export default function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar imgSrc={props.imgSrc} />
            </div>
            <div className="bottom">
                <CardInfo text={props.phone} />
                <CardInfo text={props.email} />
            </div>
        </div>
    );
};