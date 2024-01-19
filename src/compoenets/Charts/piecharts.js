import React from 'react';
import {useState, useEffect} from "react";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from "./piecharts.module.css"
const Piecharts = () => {

  const [age, setAge] = useState('default');
  const [salary, setSalary] = useState('default');
  const [gender, setGender] = useState('male');

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div>
    <p className={styles.font4}>How do I compare to my peers?</p>
    <p className={styles.font3}>These members represent current good achievement</p>
    <div className={styles.container}>
    <div className={styles.select}>
      <label className={styles.label}>
        Age:
        <select
          className={styles.selectDropdown}
          name="ageDropdown"
          value={age}
          onChange={(e) => handleChange(e, setAge)}
        >
          <option value="default">under 30</option>
          <option value="40">under 40</option>
          <option value="50">under 50</option>
        </select>
      </label>
      <label className={styles.label}>
        Salary:
        <select
          className={styles.selectDropdown}
          name="salaryDropdown"
          value={salary}
          onChange={(e) => handleChange(e, setSalary)}
        >
          <option value="default">K 20-K 30</option>
          <option value="40">K 30-K 40</option>
          <option value="50">K 40-K 50</option>
        </select>
      </label>
      <label className={styles.label}>
        Gender:
        <select
          className={styles.selectDropdown}
          name="genderDropdown"
          value={gender}
          onChange={(e) => handleChange(e, setGender)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
  </div>
  <div className={styles.piechart}>
    <div>
    <CircularProgressbar value={78} text={`78%`}  styles={buildStyles({
      pathColor: '#7FC7D9'
    })}/>
    <div className={styles.font5}>Average</div>
    </div>
  <div>
  <CircularProgressbar value={95} text={`95%`}  styles={buildStyles({
      pathColor: '#7FC7D9'
    })}/>
    <div className={styles.font5}>Top</div>
  </div>
  <div>
  <CircularProgressbar value={59} text={`59%`}  styles={buildStyles({
      pathColor: '#7FC7D9'
    })}/>
    <div className={styles.font5}>Me</div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Piecharts