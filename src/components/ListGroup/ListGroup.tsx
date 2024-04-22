import { MouseEvent, useState } from "react";
import styled from 'styled-components';

const List = styled.ul`
list-style: none;
padding: 5;
`

interface ListItemProps{
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
padding: 5px 0;
background: ${props => props.active ? 'blue':'none'}
`

interface ListGroupProps {
    title: string;
    items: string[];
    onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps)
{
    const [selectedIndex, setSelectedIndex] = useState(0)
    const empty_list = props.items.length === 0 && <p> NO ITEMS</p>

    return (
    <>
        <h1>{props.title}</h1>
        <h2>{selectedIndex}</h2>
        {empty_list} 
        <List>
            {props.items.map(
                (item, index) =>(
                    <ListItem
                    active = {index === selectedIndex}
                    //className ="list-group-item active" aria-current="true"
                    key={item} 
                    onClick={
                        () => {
                        setSelectedIndex(index)
                        props.onSelectItem(item)
                        console.log(selectedIndex)
                        }
                    }
                    >
                    {item}
                    </ListItem>
                )
            )}
        </List>
    </>);
}

export default ListGroup;
