import React from 'react';

class SearchBar extends React.Component {

    state = {term:"Pranam"}

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="txtSearch">Image Search</label>
                        <input id="txtSearch"
                            value={this.state.terma}
                            onChange={(e) => { this.setState({term: e.target.value}) }}
                            type="text" placeholder="Search" />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;