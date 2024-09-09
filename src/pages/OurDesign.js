import React, { useState } from 'react';
import './OurDesign.css';
import modernBathroom from '../assets/image/bathroom.jpg';
import stylishDining from '../assets/image/dinig-room.jpg';
import modernKitchen from '../assets/image/modern-kitchen.jpg';
import creativeLiving from '../assets/image/livingroom.jpg';
import colorfulLiving from '../assets/color-living-room.jpg';
import Footer from '../components/Footer';

const designs = [
    {
        id: 1,
        image: modernBathroom,
        title: 'Modern Bathroom',
        description:
            'A modern bathroom featuring a striking wood-paneled wall that adds warmth and texture to the space. The centerpiece is a sleek, freestanding oval bathtub that invites relaxation. A large glass door leads directly onto a private terrace, seamlessly blending indoor and outdoor living and allowing natural light to flood the room. The design is both minimalist and luxurious, with clean lines and high-end finishes that create a serene and sophisticated atmosphere.',
    },
    {
        id: 2,
        image: stylishDining,
        title: 'Stylish Dining Room',
        description:
            'A spacious dining room designed to accommodate a large family, featuring a big table perfect for gatherings and celebrations. The room is bright and airy, with crisp white walls that provide a clean, modern backdrop. Abstract paintings add a splash of color and artistic flair, enhancing the contemporary feel. A large glass door opens to the outside, seamlessly connecting the indoor dining space with the outdoors and allowing natural light to pour in, creating a warm and inviting atmosphere.',
    },
    {
        id: 3,
        image: modernKitchen,
        title: 'Sleek Kitchen',
        description:
            'A sleek, modern kitchen featuring dark grey cabinetry that adds depth and elegance to the space. An immense window stretches across one wall, allowing plenty of natural light to flood in and providing a beautiful view of the outdoors. At the center, a large dining table surrounded by comfortable, stylish chairs creates a perfect spot for family gatherings and entertaining guests. The kitchen combines a minimalist design with high-quality finishes, offering both functionality and a contemporary aesthetic.',
    },
    {
        id: 4,
        image: creativeLiving,
        title: 'Creative Living Room',
        description:
            'A spacious modern living room featuring a large beige sofa as the centerpiece, offering ample seating and a cozy, neutral palette. The room is flooded with natural light from an immense floor-to-ceiling window, which offers a stunning view of the outdoors. On one side, an expansive library with floor-to-ceiling shelves is filled with books and decorative pieces, adding both functionality and a touch of sophistication. The room is designed with clean lines and minimalistic decor, creating a welcoming yet refined atmosphere.',
    },
    {
        id: 5,
        image: colorfulLiving,
        title: 'Colorful Living Room',
        description: 'A cozy living room featuring a comfortable yellow sofa that adds a vibrant pop of color against the light beige walls. The space is filled with an array of lush green plants, creating a fresh and inviting atmosphere. A large picture with a leaf motif hangs prominently on one wall, complementing the natural theme of the room. A big glass door leads directly outside, providing easy access to the outdoors and allowing plenty of natural light to flood in, enhancing the room s warm and welcoming ambiance.'
    },
];

const OurDesign = () => {
    const [selectedDesign, setSectedDesign] = useState(null);

    const handleImageClick = (design) => {
        setSectedDesign(design);
    };
    const handleClose = () => {
        setSectedDesign(null);
    };

    return (
        <div className="our-design">
            <h2>Our Designs</h2>
            <div className="gallery">
                {designs.map((design) => (
                    <div
                        key={design.id}
                        className="gallery-item"
                        onClick={() => handleImageClick(design)}
                    >
                        <img src={design.image} alt={design.title} />
                        <div className="gallery-item-overlay">
                            <h3>{design.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedDesign && (
                <div className="modal" onClick={handleClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedDesign.image} alt={selectedDesign.title} />
                        <div className="modal-description">
                            <h3>{selectedDesign.title}</h3>
                            <p>{selectedDesign.description}</p>
                            <button onClick={handleClose} className='btn-design'>Close</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default OurDesign;
