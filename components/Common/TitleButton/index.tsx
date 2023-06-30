import React from "react";
import DynamicComponent from "../../DynamicComponent";
import { TitleButtonFragment } from "../../../app/api/generated/graphql/graphql";
import Button from "../Button";

const TitleButton: React.FC<{ block: TitleButtonFragment }> = ({ block }) => {
  const { title, button } = block || {};

  return (
    <React.Fragment>
      <section className="readBlogSection">
        <div className="readBlogContent">
          <h4>{title}</h4>
          {button && <Button block={button} />}
        </div>
      </section>
    </React.Fragment>
  );
};
export default TitleButton;
