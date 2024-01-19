import React, { useState } from 'react';
import { Grid } from '@mui/material';
import styles from './Analysis.module.css';
import BarChart from '../Charts/barChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Piecharts from "../Charts/piecharts";
import CloseIcon from '@mui/icons-material/Close';

const Analysis = () => {
 

  return (
    <div className={styles.analysis}>
      <div className={styles.notification}><NotificationsNoneOutlinedIcon/></div>
      <p className={styles.font1}>Retirement Income</p>
      <h2 className={styles.font2}>Starting Year 2056</h2>
      <Grid container spacing={3}>
      <Grid item xs={12} lg={4}>
  <h2>$3000,000</h2>
  <p className={styles.font3}>My Goal</p>
  <div className={styles.line}></div>
</Grid>
<Grid item xs={4}  lg={4}>
 <h2>59%</h2>
 <p className={styles.font3}>Goal Achieved</p>
 <div className={styles.line}></div>
</Grid>
<Grid item xs={4}  lg={4}>
 <h2>$300</h2>
 <p className={styles.font3}>Est.Monthly Income</p>
 <div className={styles.line}></div>
</Grid>
      </Grid>
      <p className={styles.font4}>Contributions Overtime</p>
      <BarChart />
      <div>
        <CloseIcon className={styles.close}/>
      <Piecharts/>
      </div>

      </div>
  );
};

export default Analysis;
