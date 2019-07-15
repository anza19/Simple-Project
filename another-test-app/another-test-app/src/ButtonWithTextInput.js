import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    CustomButton,
    CustomTextInput,
} from "./elements";

class ButtonWithTextInput extends Component{
  state = {
      textInputValue: this.props.textInputValue
  };
  
  dummyMethod = () => 3+6;
  setNewCityName = (name) => {
      this.setState({
          textInputValue: name
      });
  };

  onClick = () => {
      this.dummyMethod();
      this.setNewCityName('Santa Maria');
  };

  render(){
      const {btnLabel} = this.props;
      const{textInputValue} = this.state;
      return(
        <div>
            <CustomTextInput textInputValue={textInputValue} />
            <CustomButton btnLabel={btnLabel} clickHandler={this.onClick} />
        </div>
      );
  }
};

ButtonWithTextInput.propTypes = {
    btnLabel: PropTypes.string.isRequired,
    textInputValue: PropTypes.string.isRequired,
};

export default ButtonWithTextInput;