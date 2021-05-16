import React from 'react';

class PopupWithForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive,
    };
  }
}

export default PopupWithForm;