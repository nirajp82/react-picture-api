import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] }

    onSearchBarSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term },
            headers: {
                Authorization: "Client-ID jBJO0Oqzw74FZT9Fcody6X5S5Tpf-YNSQWGX70p0md8"
            }
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
                <label>Found {this.state.images.length} Images!</label>
                <ImageList images={this.state.images} /> 
            </div>
        );
    };
}

export default App;

