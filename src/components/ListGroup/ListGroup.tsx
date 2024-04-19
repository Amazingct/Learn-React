import { MouseEvent, useState } from "react";
import styles from './ListGroup.module.css'

interface ListGroupProps {
    title: string;
    items: string[];
    onSelectItem: (item: string) => void;
}



//Click event handler
function clicky () 
{
console.log("You clicked");
}

function ListGroup(props: ListGroupProps)
{
    
    const [selectedIndex, setSelectedIndex] = useState(-1) //Hook
    const empty_list = props.items.length === 0 && <p> NO ITEMS</p> //List will be sent to Null (Empty) if no items
    

    return (
    <>
        <h1>{props.title}</h1>
        <h2>{selectedIndex}</h2>
        {empty_list} 
        <ul className={[styles.listGroup, styles.container].join(' ')}>
            {props.items.map(
                            (item, index) =>(
                                                <li
                                                className={selectedIndex===index ? 'list-group-item active': 'list-group-item'}  
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
                                                
                                                </li>
                                            )
                            )
            }
        </ul>
    </>);
}

export default ListGroup;