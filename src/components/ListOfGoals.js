import React, { useState } from "react";

const ListOfGoals = ({ allGoals }) => {
  const [list, setlist] = useState([{}]);

  return (
    <ul>
      {allGoals.map((item) => {
        return (
          <li>
            <p>
              My goal is to {item.goal}, by {item.by}.
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfGoals;
