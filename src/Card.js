import React from 'react';

function Card(props) {
    
    const data = props.data;
    
    return (
        <div id={`card-${data.id}`} className="card" onClick={
            () => {
                props.removeCard(data.id)
            }
        }>
            <img className="card-img" src= {data.url} alt="" />
            <p className="card-title">
                {data.title}
            </p>
        </div>
    )
}

export default Card;
