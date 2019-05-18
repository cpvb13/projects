import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rapper: '',
      image: '',
      description: ''
    };
  }

  componentWillMount() {
    const { rapper, image, description } = _.sample(this.props.rappers);
    this.setState({ rapper, image, description });
  }

  hideModal() {
    this.props.hideModal();
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, rapper, description } = this.state;
    this.props.sendEmail(email, rapper, description);
  }

  render() {
    const { chosenOptions } = this.props;
    const numChosen = _.size(chosenOptions);

    if (numChosen === 5 && this.props.displayModal) {
      return (
        <div className="result-container" ref="results">
          <div className="result-container-item">
            <button
              onClick={this.hideModal.bind(this)}
              type="button"
              className="close"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="selected-rapper">
            <img className="img-rounded" src={`/assets/images/${this.state.image}`}/>
              <h1 className="resHead">{`You should hire ${this.state.rapper}!`}</h1>
              <h1 className="resEnd">{this.state.description}</h1>
              <h1 className="resDes">{`If you have room in your company for someone like me, feel free to reach me at: `}
                <a href='mailto:cait@berkeley.edu'>cait@berkeley.edu</a>
              </h1>
            </div>
            
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    chosenOptions: state.chosenOptions,
    rappers: state.rappers,
    displayModal: state.displayModal
   }
}

export default connect(mapStateToProps, actions)(Result);
