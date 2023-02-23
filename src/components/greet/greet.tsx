interface GreetProps {
  name?: string;
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Nested</h1>
      <div>Hello {props.name}</div>;
    </div>
  );
};
