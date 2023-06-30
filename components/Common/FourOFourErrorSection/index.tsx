import clsx from "clsx";
import { Fragment, useEffect } from "react";
// import { useNavigate } from '@remix-run/react'
import { FourOFourErrorSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";

const FourOFourErrorSection: React.FC<{
  block: FourOFourErrorSectionFragment;
}> = ({ block }) => {
  const { errorDescription, image, errorTitle, sectionTheme } = block || {};
  // const navigate = useNavigate()
  // React.useEffect(() => {
  //     const timeout = setTimeout(() => {
  //         navigate('/')
  //     }, 5000)
  // }, [])
  return (
    <Fragment>
      <section
        className={clsx(
          "fnfPageSection sectionInnerSpace",
          sectionTheme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="fnfPageContent">
            <div className="errorImage">{image && <Image block={image} />}</div>
            <h1>{errorTitle}</h1>
            <p>{errorDescription}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FourOFourErrorSection;
