import { Fragment, useEffect, useState } from "react";
import { ContactMessageSectionFragment } from "../../../../app/api/generated/graphql/graphql";
import clsx from "clsx";
import DynamicComponent from "../../../DynamicComponent";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import axios from "axios";
import { HiringRequestResponseData } from "../../../../pages/api/submit-form";
import { routes } from "../../../../app/api/utils/routes";
import { validate } from "../../../../app/api/utils/validation";

const ContactFormSection: React.FC<{
  block: ContactMessageSectionFragment;
}> = ({ block }) => {
  const {
    description,
    messageImage,
    servicesButtonArray,
    sectionTheme,
    sevicesTitle,
    title,
  } = block || {};
  const { customeRichTextRaw } = description || {};
  const { contactMessageImageTitleSubtitleArray, contactMessageMainImage } =
    messageImage || {};

  const [contactVal, setContactVal] = useState({
    company_name: "",
    name: "",
    email_address: "",
    phone_number: "",
    message: "",
    service_name: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [checkButtonBoolean, setCheckButtonBoolean] = useState(false);
  const navigate = useRouter();
  const excluded_fields = ["message", "request_type"];
  const [allerrors, setErrors] = useState<string[]>();
  const [getData, setGetData] = useState<HiringRequestResponseData>();
  const handleContactForm = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!isChecked) {
      setCheckButtonBoolean(true);
    }
    const [isValid, errors] = validate(contactVal, excluded_fields);
    setErrors(errors);
    if (!isValid) {
      return [errors, contactVal];
    }
    try {
      const fetcher = await axios.post(`/api/submit-form`, contactVal);
      const data = fetcher?.data;
      if (!data) {
        return [["client-error"], { ...data }];
      }
      setGetData(data);
    } catch (error) {
      return [["invalid-url"], contactVal];
    }
    setContactVal({
      company_name: "",
      name: "",
      email_address: "",
      phone_number: "",
      message: "",
      service_name: "",
    });
  };
  const isSubmitted = getData && !!getData?._id;
  useEffect(() => {
    if (isSubmitted) {
      navigate.push(routes.thank_you());
    }
  }, [isSubmitted]);

  return (
    <Fragment>
      <section
        className={clsx("contactFormSection", sectionTheme ?? "bg-white")}
      >
        <div className="container">
          <div className="contactFormContent">
            <div className="contactForm">
              <div className="sectionInfo">
                <h4>{title}</h4>
                <PortableText value={customeRichTextRaw} />
              </div>
              <form onSubmit={handleContactForm}>
                <div className="formImgWrap">
                  <div className="formWrap">
                    <div className="leftSide">
                      <div className="fieldBox companyName">
                        <label>Company Name: *</label>
                        <input
                          type="text"
                          id="company_name"
                          value={contactVal?.company_name}
                          className={clsx({
                            error: allerrors?.includes("company_name"),
                          })}
                          onChange={(e) =>
                            setContactVal({
                              ...contactVal,
                              company_name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="fieldBox name">
                        <label>Name: *</label>
                        <input
                          type="text"
                          id="name"
                          className={clsx({
                            error: allerrors?.includes("name"),
                          })}
                          value={contactVal?.name}
                          onChange={(e) =>
                            setContactVal({
                              ...contactVal,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="fieldBox emailAddress">
                        <label>E-mail address: *</label>
                        <input
                          type="email"
                          id="email_address"
                          className={clsx({
                            error: allerrors?.includes("email_address"),
                          })}
                          value={contactVal?.email_address}
                          onChange={(e) =>
                            setContactVal({
                              ...contactVal,
                              email_address: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="fieldBox phoneNumber">
                        <label>Phone Number: *</label>
                        <input
                          type="number"
                          id="phone_number"
                          className={clsx({
                            error: allerrors?.includes("phone_number"),
                          })}
                          value={contactVal?.phone_number}
                          onChange={(e) =>
                            setContactVal({
                              ...contactVal,
                              phone_number: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="rightSide">
                      <div className="fieldBox message">
                        <label>Enter your message here:</label>
                        <textarea
                          placeholder="Your message"
                          id="message"
                          value={contactVal?.message}
                          onChange={(e) =>
                            setContactVal({
                              ...contactVal,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="personImgWrap">
                    <div className="centerImage">
                      <DynamicComponent block={contactMessageMainImage} />
                    </div>
                    <div className="boxWrap">
                      {contactMessageImageTitleSubtitleArray?.map(
                        (item, index) => {
                          return (
                            <div className={`box box-${index}`} key={index}>
                              <div>
                                <h6>{item?.titleArray}</h6>
                                <span>{item?.subtitleArray}</span>
                              </div>
                              <div className="icon">
                              { item?.arrowImage && <DynamicComponent block={item?.arrowImage} />}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                <div className="fieldBox full">
                  <label id="service_name">{sevicesTitle} *</label>
                  <div className="badgeWrap">
                    {servicesButtonArray?.map((item, index) => {
                      return (
                        <button
                          className={clsx("badge", {
                            active:
                              contactVal.service_name === item?.buttonLabel,
                            error: allerrors?.includes("service_name"),
                          })}
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            setContactVal({
                              ...contactVal,
                              service_name: item?.buttonLabel as string,
                            });
                          }}
                        >
                          {item?.buttonLabel}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="confirmBox">
                  <div className="confirmInput">
                    {/* <input type="checkbox" /> */}
                    <input
                      className={clsx("styled-checkbox", {
                        error: checkButtonBoolean,
                      })}
                      id="styled-checkbox-1"
                      type="checkbox"
                      value="value1"
                      onChange={(e) => {
                        setIsChecked(!e.target.checked);
                        setCheckButtonBoolean(false);
                      }}
                    />
                    <label htmlFor="styled-checkbox-1" />
                  </div>
                  <span>
                    I have read the privacy policy and understand how you use
                    and protect the information that we provide to you.*
                  </span>
                </div>
                <div className="formButton">
                  <input type="submit" value="submit" className="button blue" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactFormSection;
