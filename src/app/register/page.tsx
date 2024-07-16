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
    switch (inputId) {
      case "email":
        if (!document.getElementById("email")?.value) {
          setShowEmailLabel(true);
        }
        break;
      case "username":
        if (!document.getElementById("username")?.value) {
          setShowUsernameLabel(true);
        }
        break;
      case "password":
        if (!document.getElementById("password")?.value) {
          setShowPasswordLabel(true);
        }
        break;
      case "repassword":
        if (!document.getElementById("repassword")?.value) {
          setShowRePasswordLabel(true);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-5 w-full h-screen">
      <div className="col-span-3 rounded-3xl bg-slate-500"></div>

      <div className="col-span-2  flex flex-col justify-center items-center h-screen gap-8">
        <div className="flex flex-col px-0 justify-center items-start gap-5">
          <span className="text-4xl">Sign up</span>
          <span className="w-3/4">
            If you don't have an account register you can{" "}
            <Link className="text-slate-500" href="/login">
              Login here !
            </Link>
          </span>
        </div>

        <form className="flex w-2/3 flex-col justify-around items-center gap-10">
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
