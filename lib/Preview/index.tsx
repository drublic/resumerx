import { useContext } from "react";
import Button from "../Button";
import Icon from "../Icon";
import { StateContext } from "../state/StateProvider";
import styles from "./Preview.module.css";

const Preview = () => {
  const { state } = useContext(StateContext);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media print {
            :root {
              --color--background: #fff;
              --color--background--light: #fff;
              --color--primary: #000;
              --color--text: #000;
            }

            header {
              display: none !important;
            }
          }
        `,
        }}
      />

      <div className={styles.toolbar}>
        <Button href="/tool" variant="outline" size="sm">
          <Icon>arrow_back</Icon>
        </Button>

        <div className={styles.spacer} />

        <Button variant="outline" size="sm" onClick={() => window.print()}>
          <Icon>save</Icon>
        </Button>
      </div>

      <div className={styles.preview}>
        <h2>Max Mustermann</h2>
        <p>Resident of California, max@mustermann.de, +1 234 567 890</p>

        {state.sections.map(({ title, history, children }) => {
          return (
            <>
              <h2>{title}</h2>
              <div>{history.reverse()[0]?.text}</div>

              {children?.map(({ title, history }) => (
                <>
                  <h3>{title}</h3>
                  <div>{history.reverse()[0]?.text}</div>
                </>
              ))}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Preview;
