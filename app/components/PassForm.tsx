import React from "react";
import Button from "@/app/components/Button";

const PassForm = () => {
  return (
    <form>
      <div>
        <label>URL: </label>
        <input type="url"></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="password"></input>
      </div>
      <div>
        <Button name="submit"></Button>
      </div>
    </form>
  );
};

export default PassForm;
