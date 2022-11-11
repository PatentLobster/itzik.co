import clsx from "clsx";

export function Logo({ className, ...props }) {
  return (
    <h1 className={clsx("font-gochi font-extrabold", className)} {...props}>
      Itzik
    </h1>
  );
}
