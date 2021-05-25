import React, { Component } from 'react'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(){
    this.props.onSearch(this.state.search)
    this.setState({
      search: this.state.search
    })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.onSearch()
    }
  }
  
  render(){
      return(
      <div className="search-block">
        <div className="row col-6 search-block__input">
          <input 
          placeholder="Поиск продуктов"
          onChange={(event)=>this.setState({
            search: event.target.value
          })}
          onKeyPress={this.handleKeyPress}/>
          <FontAwesomeIcon icon={faSearch} onClick={this.onSearch.bind(this)}/>
      </div>
    </div>
      )
  }
}

export default SearchHeader