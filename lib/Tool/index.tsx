import classNames from "classnames";
import { SyntheticEvent, useContext, useEffect, useRef, useState } from "react";
import styles from "./tool.module.css";
import Sidebar from "../Sidebar";
import Input from "../Input";
import Button from "../Button";
import Icon from "../Icon";
import EmptyRoom from "../EmptyRoom";
import Aside from "../Aside";
import { StateContext } from "../state/StateProvider";
import { Section } from "../state/reducer";

const Tool = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [result, setResult] = useState<string>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [options, setOptions] = useState<Record<string, any>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { state, dispatch } = useContext(StateContext);
  const currentSectionRef = useRef(state.currentSection);

  useEffect(() => {
    if (
      state.currentSection.section?.id !== currentSectionRef.current.section?.id
    ) {
      setTextInput("");
      setResult(undefined);
      setErrorMessage("");
      setIsLoading(false);

      currentSectionRef.current = state.currentSection;
    }
  }, [state.currentSection.section]);

  useEffect(() => {
    if (isLoading) {
      setErrorMessage("");
    }
  }, [isLoading]);

  const onSubmit = async (
    event?: SyntheticEvent,
    params: { option?: string } = {}
  ) => {
    event?.preventDefault();
    setResult(undefined);
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: textInput,
          ...params,
        }),
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      !options && loadOptions();
      setResult(data.result);

      dispatch({
        type: "history_update",
        payload: {
          sectionId: state.currentSection.section.id,
          childId: state.currentSection.child?.id,
          option: params?.option ? options[params.option]?.title : undefined,
          text: textInput,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadOptions = async () => {
    try {
      const response = await fetch("/api/options", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setOptions(data.options);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <main className={styles.layout}>
      <Sidebar
        sections={state.sections}
        currentSection={state.currentSection}
        onSectionSelect={(section: Section, child?: Section) => {
          dispatch({
            type: "current_section_update",
            payload: {
              section,
              child,
            },
          });
        }}
        onSectionAdd={(sections: Section[]) =>
          dispatch({
            type: "section_update",
            payload: sections,
          })
        }
      />

      <div
        className={classNames(styles.workstation, {
          [styles.workstationIsOpen]: result && result.length > 0,
        })}
      >
        {!state.currentSection.section ? (
          <EmptyRoom />
        ) : (
          <Input
            currentSection={state.currentSection}
            onSubmit={onSubmit}
            textInput={textInput}
            setTextInput={setTextInput}
            errorMessage={errorMessage}
            isLoading={isLoading}
          />
        )}

        <div className={styles.result}>
          <h2>Optimized Version</h2>

          <p className={styles.resultText}>{result}</p>

          <Button
            variant="outline"
            onClick={() => navigator.clipboard.writeText(result)}
          >
            <Icon size="sm">content_copy</Icon> Copy Text
          </Button>

          <div className={styles.options}>
            <h3>Further Optimization</h3>
            <p>Improve the optimized version further with these options.</p>

            {options &&
              Object.entries(options)
                .filter(([key]) => key !== "default")
                .map(([key, { title, helperText }]) => (
                  <Button
                    key={key}
                    title={helperText}
                    variant="outline"
                    size="sm"
                    className={styles.option}
                    onClick={() => {
                      setTextInput(result);
                      onSubmit(undefined, {
                        option: key,
                      });
                    }}
                  >
                    {title}
                  </Button>
                ))}

            <p>
              You can go back to variants via the History button on the right.
            </p>
          </div>
        </div>
      </div>

      <Aside
        onHistorySelect={(item) => {
          setTextInput(item.text);
          setResult(undefined);
        }}
      />
    </main>
  );
};

export default Tool;
