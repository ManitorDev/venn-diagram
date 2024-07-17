"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/register/style.module.css";
import { IoIosWarning } from "react-icons/io";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const token = Cookies.get("venn-auth-token");

  if (token) {
    router.push("/");
  }

  const [showPasswordLabel, setShowPasswordLabel] = useState(true);
  const [showRePasswordLabel, setShowRePasswordLabel] = useState(true);
  const [showEmailLabel, setShowEmailLabel] = useState(true);
  const [showUsernameLabel, setShowUsernameLabel] = useState(true);

  const handleFocus = (inputId: string) => {
    if (inputId === "email") {
      setShowEmailLabel(false);
    } else if (inputId === "username") {
      setShowUsernameLabel(false);
    } else if (inputId === "password") {
      setShowPasswordLabel(false);
    } else if (inputId === "repassword") {
      setShowRePasswordLabel(false);
    }
  };

  const handleBlur = (inputId: string) => {
    const inputElement = document.getElementById(
      inputId
    ) as HTMLInputElement | null;

    if (inputElement && !inputElement.value) {
      switch (inputId) {
        case "email":
          setShowEmailLabel(true);
          break;
        case "username":
          setShowUsernameLabel(true);
          break;
        case "password":
          setShowPasswordLabel(true);
          break;
        case "repassword":
          setShowRePasswordLabel(true);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (values: {
    email: string;
    username: string;
    password: string;
    repassword: string;
  }) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: { email: "", username: "", password: "", repassword: "" },
    onSubmit: handleSubmit,
    validationSchema: yup.object({
      email: yup
        .string()
        .required("email required")
        .email("email is not valid"),
      username: yup
        .string()
        .required("username required")
        .min(3, "Username must be at least 3 characters")
        .max(16, "Username should not be more than 16 characters"),
      password: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      repassword: yup
        .string()
        .required("Confirm password is required")
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        }),
    }),
    validateOnChange: false,
    validateOnBlur: false,
  });

  const [errorDisplayed, setErrorDisplayed] = useState(false);

  useEffect(() => {
    if (formik.submitCount > 0) {
      if (formik.errors.email) {
        toast.error(`${formik.errors.email}`);
      } else if (formik.errors.username) {
        toast.error(`${formik.errors.username}`);
      } else if (formik.errors.password) {
        toast.error(`${formik.errors.password}`);
      } else if (formik.errors.repassword) {
        toast.error(`${formik.errors.repassword}`);
      }
    }
  }, [formik.submitCount, formik.errors]);

  return (
    <div className="grid grid-cols-5 w-full h-screen">
      <div className={styles.bg}></div>

      <div className="col-span-5 md:col-span-2  flex flex-col justify-center items-center h-screen gap-8">
        <div className="flex flex-col items-center px-0 justify-center md:items-start gap-5">
          <span className="text-4xl">Sign up</span>
          <span className="w-3/4">
            If you have an account you can{" "}
            <Link className="text-slate-500" href="/login">
              Login here !
            </Link>
          </span>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex w-2/3 flex-col justify-around items-center gap-10"
        >
          <label className={`${styles.label} `} htmlFor="email">
            <span
              className={`${styles.span}  ${
                showEmailLabel ? "flex" : "hidden"
              }`}
            >
              <FaRegEnvelope />
              <span>Enter your email address</span>
            </span>
            <input
              className={`${styles.input}`}
              type="email"
              name="email"
              id="email"
              onFocus={() => setShowEmailLabel(false)}
              onChange={formik.handleChange}
              onBlur={() => {
                handleBlur("email");
              }}
            />
          </label>

          <label className={`${styles.label}`} htmlFor="username">
            <span
              className={`${styles.span}  ${
                showUsernameLabel ? "flex" : "hidden"
              }`}
            >
              <FaRegUser />
              <span>Enter your User name</span>
            </span>
            <input
              className={`${styles.input}`}
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              onFocus={() => handleFocus("username")}
              onBlur={() => handleBlur("username")}
            />
          </label>

          <label className={`${styles.label} `} htmlFor="password">
            <span
              className={`${styles.span}  ${
                showPasswordLabel ? "flex" : "hidden"
              }`}
            >
              <CiLock />
              <span>Enter your password </span>
            </span>
            <input
              className={`${styles.input}`}
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
            />
          </label>

          <label className={`${styles.label}`} htmlFor="repassword">
            <span
              className={`${styles.span}  ${
                showRePasswordLabel ? "flex" : "hidden"
              }`}
            >
              <CiLock />
              <span>Confrim your password</span>
            </span>
            <input
              className={`${styles.input}`}
              type="password"
              name="repassword"
              id="repassword"
              onChange={formik.handleChange}
              onFocus={() => handleFocus("repassword")}
              onBlur={() => handleBlur("repassword")}
            />
          </label>
          <button className={`${styles.btn}`} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
