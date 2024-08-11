import React from "react";
import CamperDetailsItem from "../CamperDetailsItem/CamperDetailsItem.jsx";
import styles from "./CamperDetails.module.css";

const CamperDetails = ({ adults, children, details, transmission, engine }) => {
  let detailsToRender = {};
  const { gas, water, ...detailsToCheck } = details;
  const detailsKeys = Object.keys(detailsToCheck);

  if (transmission) {
    detailsToRender = { ...detailsToRender, transmission };
  }

  if (engine) {
    detailsToRender = { ...detailsToRender, engine };
  }

  if (children) {
    detailsToRender = { ...detailsToRender, children };
  }

  if (adults) {
    detailsToRender = { ...detailsToRender, adults };
  }

  for (let i = 0; i < detailsKeys.length; i++) {
    if (detailsToCheck[detailsKeys[i]] > 0) {
      detailsToRender[detailsKeys[i]] = detailsToCheck[detailsKeys[i]];
    }
  }

  const detailsKeysToRender = Object.keys(detailsToRender);

  return (
    <ul className={styles.camperDetails}>
      {detailsKeysToRender.map((detail, index) => (
        <CamperDetailsItem
          key={index}
          detail={detail}
          value={detailsToRender[detail]}
          short={true}
        />
      ))}
    </ul>
  );
};

export default CamperDetails;
