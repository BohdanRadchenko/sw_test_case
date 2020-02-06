import React, { Component, createRef } from 'react';
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as controllerAction from '../../redux/controller/controllerActions'
import css from './Modal.module.css';

class Modal extends Component {

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.modalOnCloe();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.modalOnCloe();
  };

  render() {
    const { children, isOpen } = this.props;
    return (
      <>
      {isOpen && (
      <div
        className={css.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        {children}

        <div className={css.modal}>{children}</div>
      </div>
      )}
      </>
    );
  }
}

const mSTP = state => ({
  isOpen : controllerSelectors.modalHandler(state)
})

const mDTP = {
modalOnCloe : controllerAction.modalOnClose
}

export default connect(mSTP, mDTP)(Modal)
