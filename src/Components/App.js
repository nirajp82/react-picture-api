import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

	onSearchBarSubmit = (term) => {
		axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID jBJO0Oqzw74FZT9Fcody6X5S5Tpf-YNSQWGX70p0md8"
			}
		});
		console.log(term);
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
			</div>
		);
	};
}

export default App;

