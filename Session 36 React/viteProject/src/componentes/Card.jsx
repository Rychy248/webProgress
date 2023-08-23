

export default function Card(props){
  console.log(props);
    return(
      <div>
        <h2>{props.contactName}</h2>
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
        />
        <p>{props.contactPhone}</p>
        <p>{props.contactEmail}</p>
    </div>
  )
}

