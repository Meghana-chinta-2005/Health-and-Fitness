import React from 'react';
import offerImage from '../../assets/offer.png'; // Ensure the path is correct

function Offer() {
    return (
        <section id="offer">
            <h1>Offer Section</h1>
            <img src={offerImage} alt="Offer" />
        </section>
    );
}

export default Offer;