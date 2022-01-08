import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://shielded-meadow-42528.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Container className="text center add-admin pt-1 ">
        <h1 className="text-center text-title text-gray">Make Admin</h1>
        <Form onSubmit={handleAdminSubmit}>
          <Form.Control
            type="email"
            onBlur={handleOnBlur}
            placeholder="Enter email"
          />
          <Button className="btn-submit" type="submit">
            Submit
          </Button>
        </Form>
        {success && <Alert variant="success">Admin made successfully</Alert>}
      </Container>
    </div>
  );
};

export default MakeAdmin;
