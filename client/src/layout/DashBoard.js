import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
export default function DashBoard() {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "x-auth-token": token,
    },
  };
  const postHandler = async () => {
    if (title === "" || comment === "") {
      alert("Inputs empty");
    } else {
      await axios.post(
        "api/comment/publish",
        {
          title: title,
          description: comment,
        },
        config
      );
      setComment(" ");
      setTitle(" ");
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          type="email"
          placeholder="Title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Blog post</Form.Label>
        <Form.Control
          defaultValue={comment}
          onChange={(e) => setComment(e.target.value)}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button onClick={() => postHandler()}>POST</Button>
    </Form>
  );
}
