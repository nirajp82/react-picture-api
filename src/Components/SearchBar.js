import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    };
    state = { term: "" }

    onFormSubmit = (event) => {
        this.props.onSearchBarSubmit(this.state.term);
        event.preventDefault();
    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="txtSearch">Image Search</label>
                        <input id="txtSearch"
                            value={this.state.term}
                            onChange={(e) => { this.setState({ term: e.target.value }) }}
                            type="text" placeholder="Search" />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;