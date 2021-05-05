import React from "react";

const isIncome = Math.round(Math.round());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%", fontSize: "14px" }}>
      Try saying : <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "$100 " : "$50 "}
      in Category {isIncome ? "Salary " : "House "}
      for {isIncome ? "Monday " : "Tuesday "} ...
    </div>
  );
};

export default InfoCard;
