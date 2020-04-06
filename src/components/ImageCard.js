// JavaScript source code
import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gridRowEndSpan: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.onImageLoad);
    };

    onImageLoad = () => {
        const imgHeight = this.imageRef.current.clientHeight;
        const gridRowEndSpan = Math.ceil(imgHeight / 10);
        this.setState({ gridRowEndSpan: gridRowEndSpan });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.gridRowEndSpan}` }}>
                <img ref={this.imageRef} alt={description}
                    src={urls.regular} />
            </div >
        );
    }
};

export default ImageCard;