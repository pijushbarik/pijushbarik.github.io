type CareerCardProps = {
  title: string;
  company: string;
  jobDescription?: string;
  period: string;
};

const CareerCard: React.FC<CareerCardProps> = (props) => {
  return (
    <>
      <h4 className="text-4xl font-light text-yellow-600">{props.title}</h4>

      <div className="flex flex-col space-y-4">
        <span className="font-semibold text-xl">{props.company}</span>
        <span className="text-sm text-gray-400">{props.period}</span>
        {props.jobDescription && (
          <span className="leading-tight max-w-5xl">{props.jobDescription}</span>)}
      </div>
    </>
  );
};

export default CareerCard;
