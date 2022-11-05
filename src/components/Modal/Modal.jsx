import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  closeByESC = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount = () => {
    window.addEventListener('keydown', this.closeByESC);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeByESC);
  };
  render() {
    const { modalImage, closeModal } = this.props;
    return createPortal(
      <div
        className="Overlay"
        onClick={e => {
          if (e.target === e.currentTarget) {
            closeModal();
          }
        }}
      >
        <div className="Modal">
          <img src={modalImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
