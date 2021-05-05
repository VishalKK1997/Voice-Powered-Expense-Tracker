import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  const { chartData, total } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">{`$${total}`}</Typography>
        {total ? (
          <Doughnut data={chartData} />
        ) : (
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              fontSize: "20px",
            }}
          >
            There are no transactions!
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Details;
