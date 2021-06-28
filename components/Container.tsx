import classNames from "@helpers/classNames";

type ContainerProps = {
  fluid?: boolean;
  className?: string;
};

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      className={classNames(
        props.fluid ? "w-11/12 max-w-screen-lg mx-auto" : "w-full",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Container;
