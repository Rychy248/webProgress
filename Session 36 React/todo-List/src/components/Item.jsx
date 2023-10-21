
export default function Item(props) {
    return(
          <li onClick={ props.onClick } >{props.content}</li>
    );
  };