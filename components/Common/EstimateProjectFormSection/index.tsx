import clsx from "clsx";
import { EstimateProjectFormSectionFragment } from "../../../app/api/generated/graphql/graphql";
import DynamicComponent from "../../DynamicComponent";
import Image from "../Image";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";
import { validate } from "../../../app/api/utils/validation";
import { HiringRequestResponseData } from "../../../pages/api/submit-form";
import { useRouter } from "next/router";
import { routes } from "../../../app/api/utils/routes";

const EstimateProjectformSection: React.FC<{
  block: EstimateProjectFormSectionFragment;
}> = ({ block }) => {
  const {
    emailPlaceholder,
    button,
    textPlaceholder,
    namePlaceholder,
    sectionTheme,
    selectTypeButton,
    selectTypeOfProject,
    image,
    titleSubtitle,
  } = block || {};
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
    service_name: "",
    message: "",
  });
  const excluded_fields = ["message", "request_type"];
  const [allerrors, setErrors] = useState<string[]>();
  const [getData, setGetData] = useState<HiringRequestResponseData>();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [isValid, errors] = validate(formData, excluded_fields);
    setErrors(errors);
    if (!isValid) {
      return [errors, formData];
    }
    try {
      const fetcher = await axios.post(`/api/submit-form`, formData);
      const data = fetcher?.data;
      if (!data) {
        return [["client-error"], { ...data }];
      }
      setGetData(data);
    } catch (error) {
      return [["invalid-url"], formData];
    }
  };
  const isSubmitted = getData && !!getData?._id;
  const navigate = useRouter();
  useEffect(() => {
    if (isSubmitted) {
      navigate.push(routes.thank_you());
    }
  }, [isSubmitted]);
  return (
    <section
      className={clsx("estimateProjectSection", sectionTheme ?? "bg-white")}
    >
      <div className="container">
        <div className="estimateProjectContent gridBox">
          <div className="leftSide">
            <DynamicComponent block={titleSubtitle} />
            <form onSubmit={handleSubmit} className="formWrap">
              <input
                value="estimate-project"
                name="request_type"
                readOnly
                hidden
              />
              <div className="fieldBox">
                <input
                  placeholder={namePlaceholder || ""}
                  name="name"
                  type="string"
                  className={clsx({
                    error: allerrors?.includes("name"),
                  })}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="fieldBox">
                <input
                  placeholder={emailPlaceholder || ""}
                  type="email"
                  id="email_address"
                  className={clsx({
                    error: allerrors?.includes("email_address"),
                  })}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email_address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="fieldBox">
                {/* ======= */}
                <div className="fieldBox">
                  <label>{selectTypeOfProject}</label>
                  <div className="badgeWrap">
                    {selectTypeButton?.map((label, index) => (
                      <div key={index} className="badge">
                        <input
                          name="service_name"
                          type="radio"
                          id={label as string}
                          value={label as string}
                          defaultChecked={index == 0}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service_name: e.target.value,
                            })
                          }
                        />
                        <label
                          htmlFor={label as string}
                          className={clsx({
                            error: allerrors?.includes("service_name"),
                          })}
                        >
                          {label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {/* ======= */}
              </div>

              <div className="fieldBox">
                <textarea
                  name="message"
                  placeholder={textPlaceholder || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                />
              </div>
              <div className="formButton">
                {!isSubmitted && (
                  <Button type="submit">{button?.buttonLabel}</Button>
                )}
              </div>
            </form>
          </div>
          <div className="rightSide">{image && <Image block={image} />}</div>
        </div>
      </div>
    </section>
  );
};

export default EstimateProjectformSection;
