import { AxiosError } from "axios";
import React, { createContext } from "react";
import { NotificationType } from "../../@types";

export const NotificationContext = createContext<any>(undefined);

export const NotificationProvider: React.FC = ({ children }) => {
  const [notification, setNotification] = React.useState<NotificationType>({
    message: "",
    severity: "success",
    open: false,
    timeout: 6000,
  });

  const errorCallback = (err: AxiosError | string) => {
    if ((err as AxiosError).message === "Network Error") {
      return;
    }
    setNotification({
      severity: "error",
      message:
        typeof err === "string" ? err : (err as AxiosError).response?.data,
      open: true,
      timeout: 6000,
    });
    if (err as AxiosError) {
      (err as AxiosError).request.reject();
    }
  };

  return (
    <>
      <NotificationContext.Provider
        value={{ notification, setNotification, errorCallback }}
      >
        {children}
      </NotificationContext.Provider>
    </>
  );
};
