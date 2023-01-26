import classNames from "classnames";
import { useContext, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import History from "../History";
import Icon from "../Icon";
import Share from "../Share";
import { State } from "../state/reducer";
import { StateContext } from "../state/StateProvider";
import Tips from "../Tips";
import styles from "./Aside.module.css";

const items = [
  {
    id: "history",
    icon: "history",
    title: "History",
    disabled: (item, currentSection: State["currentSection"]) =>
      !(
        currentSection?.section?.history &&
        currentSection.section.history.length > 0
      ),
  },
  {
    id: "tips",
    icon: "tips_and_updates",
    title: "Tips",
  },
  {
    id: "share",
    icon: "ios_share",
    title: "Share",
  },
];

const Aside = ({ onHistorySelect }) => {
  const [activeSection, setActiveSection] = useState<string | undefined>();
  const { state } = useContext(StateContext);
  const { sections, currentSection } = state;

  const history = sections.find(({ id, children }) => {
    if (id === currentSection.section?.id) {
      return true;
    }

    return children?.find(({ id }) => id === currentSection.section?.id);
  })?.history;

  return (
    <aside className={styles.aside}>
      <ul
        className={classNames(
          styles.asideList,
          activeSection &&
            styles[
              `asideListArrowAt${items.findIndex(
                ({ id }) => activeSection === id
              )}`
            ]
        )}
      >
        {items.map((item) => {
          const { id, icon, title, disabled } = item;
          const isDisabled = disabled && disabled(item, currentSection);

          return (
            <li
              key={id}
              className={classNames(styles.asideListItem, {
                [styles.asideListItemActive]: activeSection === id,
                [styles.asideListItemDisabled]: isDisabled,
              })}
              onClick={!isDisabled ? () => setActiveSection(id) : undefined}
              title={title}
            >
              <Icon size="lg">{icon}</Icon>
            </li>
          );
        })}
      </ul>

      {activeSection && (
        <ClickAwayListener onClickAway={() => setActiveSection(undefined)}>
          <div className={styles.asideContent}>
            {activeSection === "history" && (
              <History history={history} onSelect={onHistorySelect} />
            )}
            {activeSection === "tips" && <Tips />}
            {activeSection === "share" && <Share />}
          </div>
        </ClickAwayListener>
      )}
    </aside>
  );
};

export default Aside;
