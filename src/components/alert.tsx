import styles from "./alert.module.css";
import cn from "classnames";

export default function Alert({ type }: { type: "success" | "error" }) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {type}
    </div>
  );
}
