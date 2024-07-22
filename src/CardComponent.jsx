// import React from "react";
import PropTypes from 'prop-types';


export default function CardComponent({cards, handleClick}){

    return (
        <>

        
            {/* <div className="wrapper"> */}
                <div className="cards-container">
                    {cards.map((card) => (
                            <div key={card.id} className="card-container">
                                <img
                                    src={card.images.original.url}
                                    onClick={()=>{handleClick(card.id, card.images.original.url)}}
                                />
                            </div>
                    ))}
                </div>
            {/* </div> */}
            
        </>
    );
}

CardComponent.propTypes = {

    cards: PropTypes.array.isRequired
};

