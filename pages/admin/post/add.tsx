import TextArea from "components/admin/TextArea";
import TextField from "components/admin/TextField";
import { NextPage } from "next";
import { useState } from "react";
import React from "react";

const AdminAddPost: NextPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <TextField label="Title" value={title} onChange={changeTitle} />
      <TextArea label="Body" value={body} onChange={changeBody} />

      <button className="admin-btn">Submit</button>
    </form>
  );
};

export default AdminAddPost;
