/* @flow */
import React, { type Node } from 'react';
import cxs from "cxs";
import classnames from "classnames";
import { withTheme } from '../theme';
import { isDarkColor } from '../utils/helpers';

type Props = {
  children: string | Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const BreadcrumbItem = (props: Props) => {
  const { className, children, styles, theme, ...otherProps } = props;

  const _styles = cxs({
    display: 'inline',
    ':before': {
      padding: '.5rem',
      color: theme
      ? isDarkColor(theme.backgroundColor)
        ? '#ffffff'
        : '#000000'
      : '#000000',
      content: '"/"'
    },
    ':nth-child(1)': {
      ':before': {
        content: '""'
      }
    },
    ...styles
  });

  return (
    <li className={classnames(_styles, className)} {...otherProps}>
      {children}
    </li>
  );
};

export default withTheme(BreadcrumbItem);
