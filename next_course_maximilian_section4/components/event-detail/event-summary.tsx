import classes from "./event-summary.module.css";

export function EventSummary({ title }: { title: string }) {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}
