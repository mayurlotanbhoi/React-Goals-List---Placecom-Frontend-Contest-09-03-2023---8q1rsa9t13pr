import React, { useState } from "react";

const GoalForm = ({ setAllGoals, allGoals }) => {
  const [formData, setFormData] = useState({
    goal: "",
    by: "",
  });

  const [goal1, setgoal] = useState("");
  const [by1, setby] = useState("");

  function addList(e) {
    e.preventDefault();

    setFormData({
      goal: goal1,
      by: by1,
    });

    // const newGoal = {
    //   goal: goal1,
    //   by: by1,
    // };

    setAllGoals([...allGoals, formData]);
    setgoal("");
    setby("");
    // FormData({
    //   goal: "",
    //   by: "",
    // });
  }

  return (
    <>
      <h1>My Goals</h1>
      <form
        onSubmit={(e) => {
          addList(e);
        }}
      >
        <input
          type="text"
          name="goal"
          placeholder="Goal..."
          onChange={(e) => {
            setgoal(e.target.value);
          }}
          value={goal1}
          title="Read Book"
        />

        {/* <span> */}

        <input
          type="text"
          name="by"
          placeholder="By..."
          onChange={(e) => {
            setby(e.target.value);
          }}
          value={by1}
          title="Saturday Next Week"
        />
        {/* </span> */}
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default GoalForm;
