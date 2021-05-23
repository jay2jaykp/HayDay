import { Snackbar } from "@material-ui/core";
import { Alert, Color } from "@material-ui/lab";
import React from "react";

export const NotificationShade: React.FC<{
  message: string;
  severity: Color;
  open: boolean;
  timeout: number | null;
  onClose: (event?: React.SyntheticEvent, reason?: string) => void;
}> = (props) => {
  return (
    <>
      <Snackbar
        open={props.open}
        autoHideDuration={props.timeout}
        onClose={props.onClose}
      >
        <Alert severity={props.severity} onClose={props.onClose}>
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};
