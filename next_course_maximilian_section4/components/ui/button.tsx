import Link from "next/link";

import classes from "./button.module.css";

type ButtonProps = {
  link?: string;
  onClick?: () => {};
  children: React.ReactNode;
};

export function Button({ link, onClick, children }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}
