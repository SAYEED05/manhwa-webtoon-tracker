export type SnackBarType = {
  open: boolean;
  type: "error" | "warning" | "info" | "success";
  message: string;
  meta: {};
};

export type initialStateType = {
  snackBar: SnackBarType;
};
