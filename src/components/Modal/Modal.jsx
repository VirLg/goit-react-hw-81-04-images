import { useEffect } from 'react';
import { Overlay, ModalWin } from './Modal.styled';

const ModalWindow = function ({ onClose, children }) {
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
    <Overlay class="overlay" onClick={handleCloseOverlay}>
      <ModalWin
        class="modal"
        style={{
          height: '500px',
        }}
      >
        {children}
      </ModalWin>
    </Overlay>
  );
};

export default ModalWindow;
