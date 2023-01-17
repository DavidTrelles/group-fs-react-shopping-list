function ListItem({item}){
    const purchaseIt = () => {
        console.log('purchaseIt CLICKED');
    }

    const deleteIt = () => {
        console.log('deleteIt CLICKED');
    }

    return(
        <li >
            {item.quantity} {item.unit} of {item.name} 
            <button onClick={() => { purchaseIt() }}>Purchased</button>
            <button onClick={() => { deleteIt() }}>Delete</button>
        </li>
    )
}


export default ListItem;