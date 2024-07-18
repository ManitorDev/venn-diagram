"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import styles from "@/styles/register/style.module.css";
import { toast } from "react-toastify";
import { MdOutlineDataArray } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addVenns } from "@/store/reducers/setDiagramArrays";

const CreateDiagram = () => {
  const router = useRouter();
  const token = Cookies.get("venn-auth-token");

  if (token) {
    router.push("/");
  }

  const [showVenn1Label, setShowVenn1Label] = useState(true);
  const [showVenn2Label, setShowVenn2Label] = useState(true);

  const dispatch = useDispatch();

  // Transform to set for remove duplicate members
  const converStringToSet = ({
    strOne,
    strTwo,
  }: {
    strOne: string;
    strTwo: string;
  }) => {
    let arrayOne = strOne.split("-");
    let arrayTwo = strTwo.split("-");
    let setOne = new Set(arrayOne);
    let setTwo = new Set(arrayTwo);
    return { setOne, setTwo };
  };

  // Receive and store values
  const handleSubmit = ({ venn1, venn2 }: { venn1: string; venn2: string }) => {
    const { setOne, setTwo } = converStringToSet({
      strOne: venn1,
      strTwo: venn2,
    });
    let arrOne = Array.from(setOne);
    let arrTwo = Array.from(setTwo);
    dispatch(addVenns({ venn1: arrOne, venn2: arrTwo }));
    router.push("/venn");
  };

  const handleFocus = (inputId: string) => {
    if (inputId === "venn1") {
      setShowVenn1Label(false);
    } else if (inputId === "venn2") {
      setShowVenn2Label(false);
    }
  };

  const handleBlur = (inputId: string) => {
    const inputElement = document.getElementById(
      inputId
    ) as HTMLInputElement | null;

    if (inputElement && !inputElement.value) {
      switch (inputId) {
        case "venn1":
          setShowVenn1Label(true);
          break;
        case "venn2":
          setShowVenn2Label(true);
          break;
        default:
          break;
      }
    }
  };

  const formik = useFormik({
    initialValues: { venn1: "", venn2: "" },
    onSubmit: handleSubmit,
    validationSchema: yup.object({
      venn1: yup.string().required("venn 1 required"),
      venn2: yup.string().required("username required"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
  });

  const [errorDisplayed, setErrorDisplayed] = useState(false);

  useEffect(() => {
    if (formik.submitCount > 0) {
      if (formik.errors.venn1) {
        toast.error(`${formik.errors.venn1}`);
      } else if (formik.errors.venn2) {
        toast.error(`${formik.errors.venn2}`);
      }
    }
  }, [formik.submitCount, formik.errors]);

  return (
    <div className="grid grid-cols-5 w-full h-screen">
      <div className={styles.createBg}></div>

      <div className="col-span-5 md:col-span-2  flex flex-col justify-center items-center h-screen gap-8">
        <div className="flex flex-col px-0 justify-center items-start gap-5">
          <span className="text-4xl">Create Diagram</span>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex w-2/3 flex-col justify-around items-center gap-10"
        >
          <label className={`${styles.label} `} htmlFor="venn1">
            <span
              className={`${styles.span}  ${
                showVenn1Label ? "flex" : "hidden"
              }`}
            >
              <MdOutlineDataArray />
              <span>Enter venn 1 array</span>
            </span>
            <input
              className={`${styles.input}`}
              type="text"
              name="venn1"
              id="venn1"
              onFocus={() => setShowVenn1Label(false)}
              onChange={formik.handleChange}
              onBlur={() => {
                handleBlur("venn1");
              }}
            />
          </label>

          <label className={`${styles.label}`} htmlFor="venn2">
            <span
              className={`${styles.span}  ${
                showVenn2Label ? "flex" : "hidden"
              }`}
            >
              <MdOutlineDataArray />
              <span>Enter venn 2 array</span>
            </span>
            <input
              className={`${styles.input}`}
              type="text"
              name="venn2"
              id="venn2"
              onChange={formik.handleChange}
              onFocus={() => handleFocus("venn2")}
              onBlur={() => handleBlur("venn2")}
            />
          </label>

          <button className={`${styles.btn}`} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDiagram;
