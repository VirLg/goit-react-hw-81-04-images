import { useEffect } from 'react';

const ModalWindow = function ({ onClose, children }) {
  // class ModalWindow extends Component {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleCloseEsc);
  // }

  // componentWillUnmount() {s
  //   window.removeEventListener(
  //     'keydown',
  //     this.handleCloseEsc
  //   );
  // }

  useEffect(() => {
    const handleCloseEsc = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleCloseEsc);
    return () => window.removeEventListener('keydown', handleCloseEsc);
  }, [onClose]);

  const handleCloseOverlay = e => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <div class="overlay" onClick={handleCloseOverlay}>
      <div class="modal">{children}</div>
      <h2>Hello</h2>
    </div>
  );
};

export default ModalWindow;
