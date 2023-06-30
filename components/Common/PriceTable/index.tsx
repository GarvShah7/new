import { useState } from "react";
import {
  ComparisionFieldFragment,
  PlanFragment,
} from "../../../app/api/generated/graphql/graphql";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import PlanServices from "../PricingSection/PlanServices";
import Link from "../Link";
import clsx from "clsx";
import PackageDetail from "../PricingSection/PackageDetail";
import locales from "../../../app/api/utils/locales";
import React from "react";

const PriceTable: React.FC<{
  block: PlanFragment;
  minified?: boolean;
  className?: string;
}> = ({ block, minified = false, className = "" }) => {
  const [activeIndexs, setActiveIndexes] = useState<(number | string)[]>(["0"]);
  const { label, packages, plan_services, plan_name, plan_services_template } =
    block || {};
  return minified ? (
    <Accordion
      allowZeroExpanded
      preExpanded={["0"]}
      className={clsx(className)}
      onChange={(e) => setActiveIndexes(e)}
    >
      {packages &&
        packages?.map((pricing_package, idx) => (
          <AccordionItem key={idx} uuid={String(idx)}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {pricing_package?.popularity && (
                  <span className="popular">{locales.en.MOST_POPULAR}</span>
                )}
                <div className="responsive-left-header">
                  <span>{pricing_package?.package_title}</span>
                </div>
                <div
                  className={clsx(
                    "responsive-right-header",
                    activeIndexs?.includes(String(idx)) ? "active" : ""
                  )}
                >
                  <div className="price-tag">
                    <span>{pricing_package?.package_price ?? "0"}</span>
                  </div>
                  <div className="accordion-opener" />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <PlanServices block={block} />

              <div className="choosePlan">
                <Link to="/estimate-project">{locales.en.CHOOSE_PLAN}</Link>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
    </Accordion>
  ) : (
    <table
      id="test"
      className={clsx(className, "pricetable-content-table")}
      cellSpacing="10"
    >
      <colgroup>
        <col />
        <col />
        <col />
        <col className="dark-gradient" />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <td />

          {packages?.map((i, index) =>
            i?.popularity === true ? (
              <td className="price-tab popular" key={index}>
                {locales.en.MOST_POPULAR}
              </td>
            ) : (
              <td key={index} />
            )
          )}
        </tr>
        <tr>
          <td />
          {packages?.map((i, index) => (
            <td
              className={clsx(
                "price-tab common",
                i?.popularity ? "active" : ""
              )}
              key={index}
            >
              {i?.package_title}
            </td>
          ))}
        </tr>
        <tr>
          <td />
          {packages?.map((i, index) => (
            <td
              className={clsx("price-tab", i?.popularity ? "active" : "")}
              key={index}
            >
              <span className="packagePrice">{i?.package_price ?? "0"}</span>
              <div>{i?.package_price_value}</div>

              <div className="price-savings">
                <p>{i?.package_summary}</p>
              </div>
            </td>
          ))}
        </tr>
        {block.plan_services?.map((service, index) => (
          <tr key={index}>
            <td>{service}</td>
            {packages?.map((i, idx) => {
              const { package_details } = i || {};
              const getPackage_details =
                package_details as ComparisionFieldFragment;
              return (
                <React.Fragment>
                  {index > 0 ? (
                    i?.package_details && i.package_details[index - 1] ? (
                      <td key={idx} className={i.popularity ? "active" : ""}>
                        {package_details && (
                          <PackageDetail item={getPackage_details[index - 1]} />
                        )}
                      </td>
                    ) : (
                      <td className={i?.popularity ? "active" : ""} />
                    )
                  ) : (
                    <td key={idx} className={i?.popularity ? "active" : ""}>
                      {i?.package_duration}
                    </td>
                  )}
                </React.Fragment>
              );
            })}
          </tr>
        ))}
      </tbody>
      <br />
      <br />
      <tr className="choosePlanWrap">
        <td />
        {packages?.map((i, index) => (
          <td
            className={clsx("choose-plan-link", i?.popularity ? "active" : "")}
            key={index}
          >
            <Link to="/estimate-project">{locales.en.CHOOSE_PLAN}</Link>
          </td>
        ))}
      </tr>
    </table>
  );
};

export default PriceTable;
