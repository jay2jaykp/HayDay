import React, { useContext } from "react";

import NotificationShade from "../../notification";
import { NotificationContext } from "../../../context/notification";

export const BaseLayout: React.FC = (props) => {
  const { notification, setNotification } = useContext(NotificationContext);

  const notificationClose = async () => {
    setNotification({ ...notification, message: "", open: false });
  };

  return (
    <>
      {props.children}
      <NotificationShade
        message={notification.message}
        severity={notification.severity}
        open={notification.open}
        onClose={notificationClose}
        timeout={notification.timeout}
      />
    </>
  );
};
