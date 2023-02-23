import { GreetProps } from "./greet.types";

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Nested</h1>
      <div>Hello {props.name ? props.name : "Guest"}</div>;
    </div>
  );
};
