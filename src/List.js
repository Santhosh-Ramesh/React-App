import React from 'react';
import './List.css'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function List(props){
    const items= props.items;
    const listItems = items.map( item=> {
        return(
            <div className="list" key={item.key}>
                <p>
                <input 
                type="checkbox"
                id={item.key}
                onClick={
                    (e)=>{
                        props.onComplete(e.currentTarget.checked,item.key,item.completed)
                    }
                }
                />
                <input
                type="text"
                id={item.key}
                className = {item.completed && "completed"}
                value={item.text}
                onChange={
                    (e)=>{
                        props.onUpdate(e.target.value,item.key)
                    }
                }
                />
                <span>
                    <FontAwesomeIcon 
                    className="faicons" icon='trash'
                    onClick={()=> props.deleteItem(item.key)}
                    />
                </span>
                </p>
            </div>
        )
    })
    return(
        <div>
            <FlipMove duration={300} easing="ease-in-out">
            {listItems}
            </FlipMove>
            </div>
    )

}

export default List;