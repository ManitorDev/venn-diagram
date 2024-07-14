"use client";
import { Form, Field, Formik } from "formik";
import styles from "@/styles/sendComment/style.module.css";

type Values = {
  name: string;
  msg: string;
};

const SendComment = () => {
  const handleSubmit = ({ msg, name }: Values) => {
    console.log("submitted");
  };

  return (
    <div className={`${styles.container}`}>
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-5xl font-bold">Send a comment</span>
        <span>Please share your thoughts on how to imporve our quality!</span>
      </div>
      <Formik initialValues={{ name: "", msg: "" }} onSubmit={handleSubmit}>
        <Form className="flex flex-col justify-center items-center gap-5 w-full">
          <Field
            className={`${styles.input}`}
            placeholder="name ..."
            name="name"
            type="text"
          />
          <Field
            className={`${styles.input}`}
            placeholder="message ..."
            name="msg"
            type="text"
          />
          <button className={`${styles.btn}`} type="submit">
            send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SendComment;
