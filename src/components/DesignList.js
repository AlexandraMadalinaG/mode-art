import React from 'react';
import './DesignList.css';

const DesignList = ({ designs }) => (
    <div className="gallery">
        {designs.length > 0 ? (
            designs.map((design) => (
                <div className="image-card" key={design.id}>
                    <img src={design.image} alt={design.name} />
                    <div>{design.name}</div>
                </div>
            ))
        ) : (
            <div>No design founded...</div>
        )}
    </div>
);

export default DesignList;
