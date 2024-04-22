import {AiFillHeart} from 'react-icons/ai'
import React, { useState, useEffect } from 'react';

interface Props {
  // Define your props here
}

const Like = (props: Props) => {
    const [status, setStatus] = useState(false)

    //This is like a trigger that is executed when status changes
    useEffect(() => {
        console.log(status);
    }, [status]);

    // Define your component logic here
    return <AiFillHeart color={status ? "red" : "blue"} size={100} 
    onClick={
        ()=>{
        setStatus(!status)
        }

        }
    />;
   
 
}

export default Like;
