import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transction = ({ transction }) => {
  const { deleteTransction } = useContext(GlobalContext);

  // Get sign
  const sign = transction.amount < 0 ? "-" : "+";

  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transction?.text}{" "}
      <span>
        {sign}${Math.abs(transction?.amount)}
      </span>
      <button
        onClick={() => deleteTransction(transction?.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
