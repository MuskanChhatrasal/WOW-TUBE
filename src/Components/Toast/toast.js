import "./toast.css";
import { useEffect } from "react";

export const Toast = ({ toast, handleToastClose }) => {
  const { _id, status, msg } = toast;

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      handleToastClose();
    }, 3000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div
      className={`text-toast ${status}`}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {msg}
    </div>
  );
};
