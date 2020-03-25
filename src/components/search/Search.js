import React from 'react';
import PropTypes from 'prop-types'  

class Search extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.props.changeInput(event.target.value);
    }

    render() {
        return (
            <input value={this.searchName} onChange={this.handleChange}/>
        )
    }
}

Search.propTypes = {
    searchName: PropTypes.string.isRequired,
    changeInput: PropTypes.func.isRequired
}

export default Search;