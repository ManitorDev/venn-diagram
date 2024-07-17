"use client";
import anychart from "anychart";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "@/styles/venn/venn.module.css";

const Venn = () => {
  const { venn1, venn2 } = useSelector((state) => state.venns);
  const calculate = () => {
    let unionArr = Array.from(new Set([...venn1, ...venn2]));
    let unionStr = unionArr.join(",");

    let subscription =
      venn1.length >= venn2.length
        ? venn1.filter((m) => venn2.includes(m))
        : venn2.filter((m) => venn1.includes(m));

    // Calculate difference and convert to string
    let difference_b = venn2.filter((m) => !venn1.includes(m));
    let difference_a = venn1.filter((m) => !venn2.includes(m));

    return { subscription, unionStr, difference_b, difference_a, unionStr };
  };

  // let { subscription, unionStr, difference_b, difference_a } = calculate();

  let { subscription, difference_b, difference_a, unionStr } = calculate();
  // draw Venn Diagram with set1 and set2
  useEffect(() => {
    const lableAB =
      difference_a === subscription || difference_b == subscription
        ? "A,B"
        : "";
    let chart1 = anychart.venn([
      { x: "A", label: "A", name: difference_a, value: venn1.length },
      { x: "B", label: "B", name: difference_b, value: venn2.length },
      {
        x: ["A", "B"],
        label: lableAB,
        name: subscription,
        value: subscription.length,
      },
    ]);
    chart1.container("container");
    chart1.title(":نمودار ون شما");
    chart1.fill("#555");
    chart1.labels(true);
    chart1.stroke("white", 5);
    chart1.labels().format("{%Label}\n\n\n{%Name}");
    chart1.draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venn1]);

  return (
    <>
      <div className={`${styles.container}`}>
        <div
          style={{ height: "100%" }}
          className={`${styles.vennContainer} animate__animated animate__rotateInDownRight`}
          id="container"
        ></div>
      </div>
      <table className={`${styles.table}`}>
        <thead>
          <tr className={`${styles.tr}`}>
            <th>اجتماع</th>
            <th>A - B</th>
            <th>B - A</th>
            <th>اشتراک</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${styles.tr}`}>
            <td>{unionStr}</td>
            <td>{String(difference_a) || "{}"}</td>
            <td>{String(difference_b) || "{}"}</td>
            <td>{String(subscription) || "{}"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Venn;
