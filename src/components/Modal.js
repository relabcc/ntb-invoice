import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import scroll from 'window-scroll';

ReactModal.setAppElement('#___gatsby');

const customStyles = {
  overlay: {
    zIndex: 99,
    background: 'rgba(0,0,0,0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'unset',
    bottom: 'unset',
    transform: 'translate(-50%, -50%)',
    padding: '1em',
    border: 'none',
    overflow: 'visible',
    background: 'rgba(255,255,255,1)',
  },
};

export default class Modal extends PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        this.freeze();
      } else {
        this.unfreeze();
      }
    }
  }

  componentWillUnmount() {
    if (this.props.isOpen) {
      this.unfreeze();
    }
  }

  freeze = () => {
    this.scrollY = scroll.getScrollY();
    setTimeout(() => {
      document.body.style.setProperty('position', 'fixed');
      document.body.style.setProperty('top', `-${this.scrollY}px`);
    });
  };

  unfreeze = () => {
    document.body.style.setProperty('position', 'static');
    document.body.style.setProperty('top', 'auto');
    setTimeout(() => {
      window.scrollTo(0, this.scrollY);
    });
  };

  handleRef = ref => {
    if (ref) {
      this.modalEle = ref.node;
    }
  };

  render() {
    return (
      <ReactModal
        style={customStyles}
        // shouldCloseOnOverlayClick={false}
        // shouldCloseOnEsc={false}
        ref={this.handleRef}
        {...this.props}
      />
    );
  }
}
