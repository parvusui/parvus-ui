/* @flow */
import * as React from "react";
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";

type Props = {
  children: string | React.Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  otherProps?: Object
};

const CardHeader = (props: Props) => {
  const { children, className, styles, theme, otherProps } = props;

  const _styles = cxs({
    width: "100%",
    backgroundColor: theme ? theme.neutralColor : "#fefefe",
    borderBottom: "1px solid #cddc39",
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(CardHeader);
