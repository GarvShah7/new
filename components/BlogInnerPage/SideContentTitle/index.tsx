import { Fragment, useEffect, useState } from "react";
import { BlogInnerSideContentFragment } from "../../../app/api/generated/graphql/graphql";
import { useBlogProvider } from "../../../app/api/generated/hooks/globalContext";
import React from "react";
import ShareButtons from "../../SocialShareButton";

export type SideContentCardTypeFragment = string | null | undefined;

const url = typeof window !== "undefined" ? window.location.href : "";

const SideContentTitle: React.FC<{
  contentTitle: SideContentCardTypeFragment;
  sideTitle: string[];
  blogInnerSideContent: BlogInnerSideContentFragment;
}> = ({ contentTitle, sideTitle, blogInnerSideContent }) => {
  const { blogData } = useBlogProvider()
  const { data, methods } = blogData;
  const { pageHeight } = data;
  const [currUrl, setCurrUrl] = useState("");
  const [scrollPointer, setScrollPointer] = useState("");
  const { TitleAppLogo } = blogInnerSideContent || {};
  const { appLogo } = TitleAppLogo || {};
  useEffect(() => {
    const val =
      document?.getElementById(`${scrollPointer.toString()}`)?.offsetTop ?? 0;
    const elementVal =
      val ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const pointerValue: number = typeof window != "undefined" ? elementVal : 0;
    window.scroll(0, pointerValue);
  }, [scrollPointer]);

  useEffect(() => {
    setCurrUrl(window?.location?.href);
  }, []);

  return (
    <Fragment>
      <section className="sideListSection">
        <div className="sideListContent">
          <h5>{contentTitle}</h5>
          <ul className="linkItems">
            {sideTitle?.map((item, index) => {
              return (
                <>
                  {item && (
                    <li className="single-post__toc-item" key={index}>
                      <a
                        onClick={() =>
                          setScrollPointer(`postHas_content_${index}`)
                        }
                      >
                        {item}
                      </a>
                    </li>
                  )}
                </>
              );
            })}
            {/* {sideTitle?.map((item, idx) => (<li key={idx}> <Link to={'#' + item?.replace(/\s|\?/g, '_')}>{item}</Link></li>))} */}
          </ul>
        </div>
      </section>
      <section className="sideSocialSection">
        <div className="sideSocialContent">
          <h6>{TitleAppLogo?.title}</h6>
          <ul className="sideSocialList">
            {appLogo?.map((item, index) => {
              const { image } = item || {};
              return (
                <li key={index}>
                  <ShareButtons
                    title={String(item?.title)}
                    url={currUrl}
                    socialImg={image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default React.memo(SideContentTitle);
