"use client";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-start w-full px-6 py-4 justify-around gap-5 md:items-center">
      <div className="w-full md:w-1/3">
        <span className="font-extralight text-sm text-slate-400">
          &copy; Built and mainteained by <Link href="/">ManiTor.Dev</Link>
        </span>
      </div>
      <div className="flex w-full md:w-1/3 justify-center items-center gap-4 ">
        <Link href="/">
          <FaXTwitter />
        </Link>
        <Link href="/">
          <FaTelegramPlane />
        </Link>
        <Link href="/">
          <FaInstagram />
        </Link>
      </div>
      <div className="w-full md:w-1/3">
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values: { email: string }) => {
            console.log(values);
          }}
        >
          <Form>
            <Field
              type="email"
              placeholder="your email ..."
              name="email"
              className="bg-transparent py-2 px-6 font-light text-sm border-2 border-slate-500 rounded-lg"
            />
            <button
              className="py-2 px-5 bg-slate-400 text-black rounded-lg hover:bg-slate-500 transition-all duration-300 text-sm"
              type="submit"
            >
              send
            </button>
          </Form>
        </Formik>
      </div>
    </footer>
  );
};

export default Footer;
