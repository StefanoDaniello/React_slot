import React from "react";

type MyComponentProps = {
  renderContent: (message: string) => React.ReactNode;
};

const MyComponents2: React.FC<MyComponentProps> = ({ renderContent }) => {
  const message = "";
  return <div>{renderContent(message)}</div>;
};

export default MyComponents2;
