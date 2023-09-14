import Item from "./Item";


export default function ListItems(props) {
  return(
    <div>
      <ul>
        {
          props.listItems.map((item,index) => <Item key={index} content={item}  />)
        }
      </ul>
    </div>
  );
};