import React from "react";

type MyComponentProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

const MyComponent: React.FC<MyComponentProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div>
      {header && <div className="header">{header}</div>}
      <div>{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};

export default MyComponent;
