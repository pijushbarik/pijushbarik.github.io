type BodyProps = {
  content: string;
};

const Body: React.FC<BodyProps> = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.content }} />;
};

export default Body;
