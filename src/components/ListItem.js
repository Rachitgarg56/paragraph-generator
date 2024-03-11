
const ListItem = ( { para, id } ) => {
    return (
        <li className="text-red-700">{id + ") "}{para}</li>
    )
}

export default ListItem;
