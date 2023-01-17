import ListItem from '../ListItem/ListItem';

function ShoppingList({itemArrayProp}){
    return(
        <ul>
            {itemArrayProp.map((item) => (
                <ListItem key={item.id} item={item}/>
            ))}
        </ul>
    )
}

export default ShoppingList;