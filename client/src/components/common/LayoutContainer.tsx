import React, { ReactNode, ComponentType, useEffect } from "react";
import { Header, Footer } from "../index";

type LayoutProps = {
  component: ComponentType;
  title: string;
  isHeader: boolean;
  isFooter: boolean;
};

const ComponentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const LayoutContainer: React.FC<LayoutProps> = ({
  component: Component,
  isHeader,
  isFooter,
  title,
}: LayoutProps): JSX.Element => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      {isHeader && <Header />}
      <ComponentWrapper>
        <Component />
      </ComponentWrapper>
      {isFooter && <Footer />}
    </div>
  );
};

export default LayoutContainer;
