import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transction } from "./Transction";

export const TransctionList = () => {
  const { transctions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transctions.map((transction) => (
          <Transction transction={transction} key={transction?.id} />
        ))}
      </ul>
    </>
  );
};
