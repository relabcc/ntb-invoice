import React from 'react';
import styled, { css } from 'styled-components';
import {
  themeGet,
  fontSize,
  space,
  color,
  width,
  borders,
  borderColor,
  borderRadius,
  letterSpacing,
  fontWeight,
  position,
  height,
  lineHeight,
  minHeight,
  display,
} from 'styled-system';
import tag from 'clean-tag';
import bowser from 'bowser';

import Box from './Box';

import { getColorByPropKey } from './utils/getColor';
import blacklist from './utils/blacklist';
import injectProps from './utils/injectProps';

let isTouch;
if (typeof window !== 'undefined') {
  const browser = bowser.getParser(window.navigator.userAgent);
  isTouch = browser.getPlatform().type !== 'desktop';
}

const active = css`
  color: ${getColorByPropKey('hoverColor')};
  background-color: ${getColorByPropKey('hoverBg')};
  border-color: ${getColorByPropKey('hoverBorder')};
`;

export const buttonStyle = css`
  padding: 0;
  border: none;
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  ${display}
  ${fontSize}
  ${position}
  ${space}
  ${color}
  ${width}
  ${height}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${fontWeight}
  ${lineHeight}
  ${minHeight}
  ${letterSpacing}
  ${injectProps('whiteSpace')}
  appearance: none;
  transition: all ${themeGet('duration', 250)}ms;
  cursor: pointer;
  &:hover {
    ${(props) => !props.disabled && !isTouch && active}
    outline: none;
  }
  &:focus {
    ${(props) => !props.disabled && active}
    outline: none;
  }
  ${(props) => props.active && !props.disabled && active}
  ${(props) => props.disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const ButtonBase = styled(tag)`
  ${buttonStyle}
`;

const InButtonSpan = (props) => (
  <Box
    is="span"
    {...props}
  />
);

const Button = ({
  leftIcon,
  rightIcon,
  iconSpacing,
  children,
  verticalAlign,
  ...props
}) => (
  <ButtonBase {...props}>
    {leftIcon ? <InButtonSpan mr={iconSpacing}>{leftIcon()}</InButtonSpan> : null}
    <InButtonSpan verticalAlign={verticalAlign}>{children}</InButtonSpan>
    {rightIcon ? <InButtonSpan ml={iconSpacing}>{rightIcon()}</InButtonSpan> : null}
  </ButtonBase>
);

Button.defaultProps = {
  blacklist,
  is: 'button',
  fontSize: '1em',
  border: '1px solid',
  borderColor: 'coffee',
  bg: 'lightWhite',
  color: 'coffee',
  hoverColor: 'white',
  hoverBg: 'coffee',
  px: '2.5em',
  py: '1.25em',
  fontWeight: 'bold',
  iconSpacing: '0.25em',
  borderRadius: '3em',
  display: 'inline-block',
  verticalAlign: 'text-top',
};

Button.secondary = (props) => (
  <Button
    bg="secondary"
    borderColor="secondary"
    hoverColor="secondary"
    {...props}
  />
);

Button.transparent = (props) => (
  <Button
    border="1px solid transparent"
    bg="transparent"
    color="text"
    hoverBorder="primary"
    {...props}
  />
);

export default Button;
