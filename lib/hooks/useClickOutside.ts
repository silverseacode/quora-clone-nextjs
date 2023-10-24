import { useEffect } from 'react';

function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  isOpen: boolean,
  callback: () => void
) {
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, ref, callback]);
}

export default useClickOutside;
