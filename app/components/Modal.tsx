import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";

const Modal = ({
  isOpen,
  onClose,
  width = "80vw",
  height = "90vh",
  children,
}: {
  isOpen: boolean;
  onClose: MouseEventHandler;
  width: string;
  height: string;
  children: React.ReactElement;
}) => {
  if (!isOpen) return null;
    console.log(height,width)
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-cream rounded-lg shadow-lg overflow-hidden h-[90vh] w-[80vw]`}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-5 text-3xl text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="p-4 h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;
