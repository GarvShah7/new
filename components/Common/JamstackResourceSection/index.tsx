import { Fragment } from "react";

import ResourceDetailCard from "./ResourceDetailCard";
import { JamstackResourceSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Button from "../Button";

const JamStackResourceSection: React.FC<{
  block: JamstackResourceSectionFragment;
}> = ({ block }) => {
  const { resourceDetailCard, title, button } = block || {};

  return (
    <Fragment>
      <section className="jamStackResourceSection">
        <div className="jamStackResourceContent">
          <h6>{title}</h6>
          <div className="jrGrid gridBox col3">
            {resourceDetailCard?.map((item, index) => {
              return (
                <div className="jrBox" key={index}>
                  {item && <ResourceDetailCard block={item} />}
                </div>
              );
            })}
          </div>
          <div className="consultButton">
            {button && <Button block={button} />}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default JamStackResourceSection;
