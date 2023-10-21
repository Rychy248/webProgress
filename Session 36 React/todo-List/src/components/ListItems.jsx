import Item from "./Item";


export default function ListItems(props) {
  function lineThrough(e){
    e.currentTarget.classList.toggle("line-through");
  };

  return(
    <div>
      <ul>
        {
          props.listItems.map((item,index) => <Item
            key={index}
            itemindex={index}
            content={item}
            // onClick={ e => props.deleteItem( e.currentTarget.getAttribute("itemindex") ) }
            onClick={() => props.deleteItem(index)}
          />)
        }
      </ul>
    </div>
  );
};