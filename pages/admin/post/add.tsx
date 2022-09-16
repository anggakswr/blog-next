import TextArea from "components/admin/form/TextArea";
import TextField from "components/admin/form/TextField";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { setSnackbar } from "slices/snackbarSlice";
import useSWR from "swr";

type AdminAddPostPropType = {
  postId: string | null;
};

const AdminAddPost: NextPage<AdminAddPostPropType> = ({ postId }) => {
  // global state
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

    if (postId) {
      try {
        await axios.put("/posts/" + postId, payload);
        dispatch(setSnackbar({ text: "Data edited", type: "success" }));
        Router.push("/admin/post");
      } catch {
        setError("Sorry, an error occurred");
      }
    } else {
      try {
        await axios.post("/posts", payload);
        dispatch(setSnackbar({ text: "Data added", type: "success" }));
        Router.push("/admin/post");
      } catch {
        setError("Sorry, an error occurred");
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (postId) {
      const getDetailPost = async () => {
        setLoading(true);

        try {
          const res = await axios.get("/posts/" + postId);
          const { title, body } = res.data;

          setTitle(title);
          setBody(body);
        } catch {
          setError("Sorry, an error occurred");
        }

        setLoading(false);
      };

      getDetailPost();
    }
  }, [postId]);

  return (
    <form onSubmit={submit}>
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
