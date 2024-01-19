import React, { useState } from 'react';
import { Slider, Button, Link,Typography } from '@mui/material';
import styles from "./stratergy.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Stratergy = () => {
  const [employeeContributions, setEmployeeContributions] = useState(12);
  const [retirementAge, setRetirementAge] = useState(65);

  const handleEmployeeContributionsChange = (event, newValue) => {
    setEmployeeContributions(newValue);
  };

  const handleRetirementAgeChange = (event, newValue) => {
    setRetirementAge(newValue);
  };


  return (
    <div className={styles.Stratergy}>
      <h3>Retirement Strategy</h3>
      <div>
        <p>Employee Contribution</p>
        <div  className={styles.container}>
        <Slider
          value={employeeContributions}
          onChange={handleEmployeeContributionsChange}
          aria-label="Employee Contributions"
          valueLabelDisplay="auto"
        />
        <p>{employeeContributions}%</p>
        </div>
      </div>

      <div>
        <p>Retirement Age</p>
        <div className={styles.container}>
        <Slider
          value={retirementAge}
          onChange={handleRetirementAgeChange}
          aria-label="Retirement Age"
          valueLabelDisplay="auto"
        />
        <p>{retirementAge}%</p>
        </div>
      </div>
      <div>
      <div className={styles.data}>
        <p>employer contribution</p>
        <p>8.4%</p>
      </div>
      <div className={styles.data}>
        <p>Interest</p>
        <p>5%</p>
      </div>
      </div>
     <div  style={{ display: 'flex', justifyContent: 'center' }} >
      <Button variant="contained"className={styles.button} >
  Update Now
</Button>
</div>
<div className={styles.link}>
<Link href="#" underline="none" sx={{ cursor: 'pointer'}}>
      <Typography variant="body1" display="inline" >
        View Help Docs
      </Typography>
      <ArrowForwardIosIcon fontSize="small"  />
    </Link>
    <p>Are you considering a housing advance?</p>
    <p>Limited time, Reduced Interest</p>
    <Link href="#" underline="none" sx={{ cursor: 'pointer' }}>
      <Typography variant="body1" display="inline">
        Learn More
      </Typography>
      <ArrowForwardIosIcon fontSize="small"  />
    </Link>
</div>
     
    </div>
  );
};

export default Stratergy;
