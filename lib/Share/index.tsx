import { useContext } from "react";
import Button from "../Button";
import Icon from "../Icon";
import { StateContext } from "../state/StateProvider";

const Share = () => {
  const { state } = useContext(StateContext);

  return (
    <div>
      <h2>Share your Optimised Contents</h2>

      <h3>The Outline of your Contents</h3>
      <ol>
        {state.sections.map(({ id, title, children }) => (
          <li key={id}>
            {title}

            {children?.length > 0 && (
              <ol>
                {children.map(({ id, title }) => (
                  <li key={id}>{title}</li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>

      <Button href="/tool/preview" variant="outline">
        <Icon size="sm">preview</Icon> Open Optimised Version
      </Button>
    </div>
  );
};

export default Share;
