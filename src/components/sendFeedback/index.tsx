"use client";
import { Form, Field, Formik } from "formik";
import styles from "@/styles/sendComment/style.module.css";
import gsap, { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Values = {
  name: string;
  msg: string;
};

const SendComment = () => {
  const handleSubmit = ({ msg, name }: Values) => {
    console.log("submitted");
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          scrub: 2,
          start: "top 80%",
          end: "top center",
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={`${styles.container}`}>
      <div className="flex flex-col p-5 justify-center items-center gap-4">
        <span className="text-5xl text-center font-bold">Send a comment</span>
        <span className="text-center">Please share your thoughts on how to imporve our quality!</span>
      </div>
      <Formik initialValues={{ name: "", msg: "" }} onSubmit={handleSubmit}>
        <Form className="flex flex-col p-5 justify-center items-center gap-5 w-full">
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
