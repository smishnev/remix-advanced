
function Modal({ children, onClose }: {children: any, onClose?: () => void}) {
	return (
	  <div className="modal-backdrop" onClick={onClose}>
		<dialog
		  className="modal"
		  open
		  onClick={(event) => event.stopPropagation()}
		>
		  {children}
		</dialog>
	  </div>
	);
  }
  
  export default Modal;