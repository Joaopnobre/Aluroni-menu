import React, { useState } from "react";
import styles from "./Computer.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Props {
  computer: string;
  setComputer: React.Dispatch<React.SetStateAction<string>>;
}

export default function Computer({ computer, setComputer }: Props) {
  const [opened, setOpened] = useState(false);
  const nameComputer = computer && options.find(option => option.value === computer)?.name;
  return (
    <>
      <button
        className={classNames({
            [styles.computer]:true, // existe sempre
            [styles["computer--active"]]: computer !== "", // vai existir quando o ordenador for diferente de string vazia 
        })}
        onClick={() => setOpened(!opened)}
        onBlur={() => setOpened(false)}
      >
        <span>{nameComputer || "Ordenar por"}</span>
        {opened ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </button>
      <div
        className={classNames({
          [styles.computer__options]: true,
          [styles["computer__options--active"]]: opened,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.computer__option}
            key={option.value}
            onClick={() => setComputer(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </>
  );
}
