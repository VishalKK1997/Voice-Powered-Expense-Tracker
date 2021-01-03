import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";

const Main = () => {
  return (
    <div>
      <Card>
        <CardHeader title="Expense Tracker" />
        <CardContent>
          <Typography align="center" variant="h5">
            Total Balance $100
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
            Add income for 100$ in the category
          </Typography>
          <Divider />
          {/*Form*/}
        </CardContent>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default Main;
