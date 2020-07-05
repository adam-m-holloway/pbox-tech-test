import React from 'react';
import { Styled } from './Spinner.style';

export const Spinner = () => (
  <Styled.Spinner viewBox="0 0 50 50" data-testid="spinner">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </Styled.Spinner>
);
