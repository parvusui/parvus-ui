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

const Breadcrumbs = (props: Props) => {
  const { children, className, styles, theme, otherProps } = props;

  const _styles = cxs({
    ...styles
  });

  return (
    <div className={classnames(_styles, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default withTheme(Breadcrumbs);
