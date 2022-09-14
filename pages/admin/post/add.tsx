import TextArea from "components/admin/TextArea";
import TextField from "components/admin/TextField";
import { NextPage } from "next";
import { useState } from "react";
import React from "react";
import axios from "axios";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, currentCount } from "slices/counterSlice";

const AdminAddPost: NextPage = () => {
  // global state
  const count = useSelector(currentCount);
  const dispatch = useDispatch();

  // local state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      title,
      body,
    };

    setLoading(true);

    try {
      await axios.post("/posts", payload);
      Router.push("/admin/post");
    } catch {
      setError("Sorry, an error occurred");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={submit}>
      <p>Count {count}</p>

      <button type="button" onClick={() => dispatch(increment())}>
        increment
      </button>

      <button type="button" onClick={() => dispatch(decrement())}>
        decrement
      </button>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <TextField
        label="Title"
        value={title}
        onChange={changeTitle}
        disabled={loading}
      />

      <TextArea
        label="Body"
        value={body}
        onChange={changeBody}
        disabled={loading}
      />

      <button className="admin-btn" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default AdminAddPost;
