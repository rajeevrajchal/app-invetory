import { $FIX_ME } from "@/types/fix-me";
import { OPTION } from "@/types/option.type";
import { FloatingIndicator, UnstyledButton } from "@mantine/core";
import { findIndex } from "lodash";
import { useState } from "react";
import classes from "./floating-button.module.css";

interface FloatingButtonProps {
  options: OPTION[];
  active: string;
  setActive: (active: "my" | "team") => void;
}

const FloatingButton = (props: FloatingButtonProps) => {
  const { options, setActive, active } = props;

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = options.map((item: OPTION, index: number) => (
    <UnstyledButton
      key={`option-${item.value}-${index}`}
      className={classes.control}
      ref={setControlRef(index)}
      onClick={() => setActive(item.value as $FIX_ME)}
      mod={{ active: active === item.value }}
    >
      <span className={classes.controlLabel}>{item.label}</span>
    </UnstyledButton>
  ));

  console.log("controlsRefs[active]", {
    t: controlsRefs[active],
    a: active,
    c: controlsRefs,
  });

  return (
    <div className={classes.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={
          controlsRefs[
            findIndex(options, (item: OPTION) => item.value === active)
          ]
        }
        parent={rootRef}
        className={classes.indicator}
      />
    </div>
  );
};

export default FloatingButton;
