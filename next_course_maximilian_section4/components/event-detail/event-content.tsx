import { PropsWithChildren } from "react";
import classes from "./event-content.module.css";

export function EventContent({ children }: PropsWithChildren) {
  return <section className={classes.content}>{children}</section>;
}
