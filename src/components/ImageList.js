import React from 'react';

const ImageList = (props) => {
    const imageList = props.images.map((item) => {
        return <img src={item.urls.small} alt={item.description} key={item.id} />;
    });
    return <div>{imageList}</div>
};

export default ImageList;


