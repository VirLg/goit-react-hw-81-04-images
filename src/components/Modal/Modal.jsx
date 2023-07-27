import { Component } from 'react';

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.handleCloseEsc
    );
  }

  handleCloseEsc = e => {
    if (e.code === 'Escape') this.props.onClose();
  };
  handleCloseOverlay = e => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) this.props.onClose();
  };
  render() {
    return (
      <div
        class="overlay"
        onClick={this.handleCloseOverlay}
      >
        <div class="modal">{this.props.children}</div>
        <h2>Hello</h2>
      </div>
    );
  }
}
export default ModalWindow;
