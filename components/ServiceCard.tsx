import { FunctionComponent } from "react";
import { IService } from "../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, title, about },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-8 space-x-4">
      <Icon className="w-12 h-12 text-concretesky-3 dark:text-night-3" />
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
