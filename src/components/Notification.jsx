import React, { useState, useEffect } from "react";

function Notification({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, [onClose]);

  return <div className={`notification ${isVisible ? "visible" : ""}`}>{message}</div>;
}

export default Notification;
