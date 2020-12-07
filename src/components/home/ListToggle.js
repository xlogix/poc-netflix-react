import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class ListToggle extends Component {

  state = {
    toggled: false
  }

  handleClick = () => {
    if (this.state.toggled === true) {
      this.setState({
        toggled: false
      })
    } else {
      this.setState({
        toggled: true
      })
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <FontAwesomeIcon icon={faChevronRight} />
          <i className="fas fa-plus"></i>
          <i className="fas fa-check"></i>
        </div>
      </div>
    )
  }
};

export default ListToggle;