import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ICONSIZES = {
  large: 24,
  small: 16,
};

const BARSIZES = {
  large: {
    fontSize: "18px",
    height: "32",
    paddingLeft: "32px",
    borderBottom: "solid 2px black",
    iconSize: "24",
  },
  small: {
    fontSize: "14px",
    height: "24",
    paddingLeft: "24px",
    borderBottom: "solid 1px black",
    iconSize: "16",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let styles = BARSIZES[size];
  return (
    <Wrapper style={{}}>
      <VisuallyHidden>
        <label htmlFor="search-bar">{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <TextInput
        style={{
          "--fontSize": styles.fontSize,
          "--paddingLeft": styles.height + "px",
          "--borderBottom": styles.borderBottom,
          "--searchbarWidth": width + "px",
          "--height": styles.height + "px",
        }}
        id="search-bar"
        type="search"
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--searchbarWidth);
  border: none;
  border-bottom: var(--borderBottom);
  font-size: var(--fontSize);
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;
