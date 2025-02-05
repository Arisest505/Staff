import React from 'react';
import styled from 'styled-components';

interface SwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <StyledWrapper>
      <input
        type="checkbox"
        className="theme-checkbox"
        checked={isChecked}
        onChange={onToggle}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .theme-checkbox {
    --toggle-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 6.25em;
    height: 3.125em;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 0;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
    font-size: var(--toggle-size);
  }

  .theme-checkbox::before {
    content: "";
    width: 2.25em;
    height: 2.25em;
    position: absolute;
    top: 0.438em;
    left: 0.438em;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    border-radius: 50%;
    transition: 0.4s;
  }

  .theme-checkbox:checked::before {
    left: calc(100% - 2.25em - 0.438em);
    background-position: 0;
  }

  .theme-checkbox:checked {
    background-position: 100%;
  }
`;

export default Switch;
