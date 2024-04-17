import { createPortal, useRef, useEffect } from 'react-dom';

export default function Modal({children, open, className = ''}) {
  const dialog = useRef();

  useEffect(() => {
    open && dialog.current.showModal();
  }, [open])

  return createPortal(
      <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>, 
      document.getElementById('modal')
    );
}