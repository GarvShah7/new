import React from "react";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import CustomImage from "../Common/Image";
import { ImageFragment } from "../../app/api/generated/graphql/graphql";
import Image from "../Common/Image";

export type ShareButtonsProps = {
  title: string;
  url: string;
  socialImg?: ImageFragment | undefined | null;
  twitterHandle?: string;
  tags?: string[];
};
const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  url,
  socialImg,
  twitterHandle,
  tags,
}) => {
  switch (title) {
    case "Facebook":
      return (
        <div className="ShareButtonIcon">
          <FacebookShareButton url={url}>
            {socialImg && <CustomImage block={socialImg} />}
          </FacebookShareButton>
        </div>
      );
    case "Instagram":
      return (
        <div className="ShareButtonIcon">
          <InstapaperShareButton url={url}>
            {socialImg && <Image block={socialImg} />}
          </InstapaperShareButton>
        </div>
      );
    case "Twitter":
      return (
        <div className="ShareButtonIcon">
          <TwitterShareButton url={url}>
            {socialImg && <Image block={socialImg} />}
          </TwitterShareButton>
        </div>
      );
    case "Linkedin":
      return (
        <div className="ShareButtonIcon">
          <LinkedinShareButton url={url}>
            {socialImg && <Image block={socialImg} />}
          </LinkedinShareButton>
        </div>
      );
    default:
      return <></>;
  }
};
export default ShareButtons;
