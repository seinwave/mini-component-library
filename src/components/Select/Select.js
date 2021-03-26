import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBits>
        {displayedValue}
        <Arrow style={{ "--size": 24 + "px" }}>
          {" "}
          <Icon id={"chevron-down"} strokeWidth={2} size={24} />
        </Arrow>
      </PresentationalBits>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBits = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray500};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 3px;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
