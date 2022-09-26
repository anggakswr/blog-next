import TextArea from "components/admin/form/TextArea";
import TextField from "components/admin/form/TextField";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { setSnackbar } from "slices/snackbarSlice";

type AdminAddPostPropType = {
  postId: string | null;
};

type FieldErrorsType = {
  title?: string[];
  body?: string[];
};

const AdminAddPost: NextPage<AdminAddPostPropType> = ({ postId }) => {
  // global state
  const dispatch = useDispatch();

  // field
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // err msgs
  const [fieldErrors, setFieldErrors] = useState<FieldErrorsType>({});

  // form
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTitle(value);

    if (value) {
      setFieldErrors((prevState) => {
        return {
          ...prevState,
          title: [],
        };
      });
    }
  };

  const changeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setBody(value);

    if (value) {
      setFieldErrors((prevState) => {
        return {
          ...prevState,
          body: [],
        };
      });
    }
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFieldErrors({});

    if (title && body) {
      const payload = {
        title,
        body,
      };

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
    } else {
      let errors: FieldErrorsType = {};

      if (!title) errors.title = ["Field is required"];
      if (!body) errors.body = ["Field is required"];

      setFieldErrors(errors);
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
        errors={fieldErrors?.title || []}
      />

      <TextArea
        label="Body"
        value={body}
        onChange={changeBody}
        disabled={loading}
        errors={fieldErrors?.body || []}
      />

      <button className="admin-btn" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default AdminAddPost;
