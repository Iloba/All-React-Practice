import React from "react";
import Journal from "./Journal";
import data from "./travelData";
import styles from "./TravelJournal.module.css";
const TravelJournal = () => {
  const TourCities = data.map(tour => <Journal key={tour.id} data={tour}></Journal>);
  console.log(TourCities);
  return (
    <div className={styles['journal-container']}>
      <div className={styles.header}>
        <h2>My Travel Journal</h2>
      </div>
      <div className={styles['journal-body']}>{TourCities}</div>
    </div>
  );
};

export default TravelJournal;
