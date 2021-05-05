import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  income: {
    height: "50vh",
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
  },
  expense: {
    height: "50vh",
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
  },
}));
