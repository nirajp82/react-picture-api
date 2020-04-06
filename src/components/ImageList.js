import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imageList = props.images.map((item) => {
        return <ImageCard image={item} key={item.id} />;
    });
    return <div className="imageList">{imageList}</div>
};

export default ImageList;


