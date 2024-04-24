import PassForm from "@/app/components/PassForm";
import React from "react";

const UserHomePage = () => {
  //expect username
  return (
    <>
      <h1>Welcome [usernamehere] </h1>
      <section>
        <h3>Main Window Area Here</h3>
        <p>--section start--</p>
        <div>Table Shows Saved Passwords</div>
        <p>--section end--</p>
      </section>
      <section>
        <p>--section start--</p>
        <h3>CRUD functionaly</h3>
        <div>
          <button>Edit </button>
          <p>Button Opens Modal? Allows CRUD</p>
          <p>Probably also has a pass generator</p>
        </div>
        <p>--section end--</p>
      </section>
      <button>Log Out</button>
      <section>
        <p>--section start--</p>
        <PassForm />
      </section>
    </>
  );
};

export default UserHomePage;
