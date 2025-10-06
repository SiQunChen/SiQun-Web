import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.body.classList.add('no-scroll');
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={`modal-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`modal-container ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <button data-interactive className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;
