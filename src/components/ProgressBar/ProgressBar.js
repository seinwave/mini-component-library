/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: { padding: "0px", borderRadius: "4px", height: "8px" },

  medium: {
    padding: "0px",
    borderRadius: "4px",
    height: "12px",
  },

  large: {
    padding: 4 + "px",
    borderRadius: "8px",
    height: "24px",
  },
};

const ProgressBar = ({ value, size }) => {
  let styles = SIZES[size];
  return (
    <Wrapper
      style={{
        "--height": styles.height,
        "--padding": styles.padding,
        "--border-radius": styles.borderRadius,
      }}
    >
      <BarWrapper>
        <Progression
          style={{ "--width": value + "%" }}
          role="progress-bar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        ></Progression>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--border-radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  height: 100%;
  /* trimming off corners when bar is near 100% */
  overflow: hidden;
`;

const Progression = styled.div.attrs((props) => ({
  complete: true,
}))`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--width);
  border-radius: 4px 0px 0px 4px;
`;
