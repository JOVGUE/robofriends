import React from 'react';

const Card = (props)=>{
    const {name, email,id}=props;
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt='robot' src={`https://robohash.org/${props.id}?100x100`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;