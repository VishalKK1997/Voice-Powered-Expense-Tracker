import React, { useContext, useState } from "react";
import useStyles from "./styles";
import {
  Avatar,
  IconButton,
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseTracketContext } from "../../../context/context";
import CustomizedSnackbar from "../../Snackbar/Snackbar";
//hello

const List = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { deleteTransaction, transactions } = useContext(ExpenseTracketContext);

  const handleDeleteTransaction = (transactionId) => {
    setOpen(true);
    deleteTransaction(transactionId);
  };

  return (
    <MUIList dense={false} className={classes.list}>
      <CustomizedSnackbar open={open} setOpen={setOpen} action="delete" />
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTransaction(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
