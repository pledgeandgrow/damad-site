import { useState, useCallback } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'unset';
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
  };
}

export default useModal;
