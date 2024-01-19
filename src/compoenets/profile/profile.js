import React from 'react';
import styles from "./profile.module.css";
import {Grid } from "@mui/material"; // Importing Select and Grid components
import { useState } from "react";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Profile = () => {
  const [value, setValue] = useState("I want To");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
 <div className={styles.container}>
       <NotificationsNoneOutlinedIcon className={styles.notification} />
      {/* profile card */}
      <div className={styles.card}>
        <img
          src="https://avatars.githubusercontent.com/u/3?v=4"
          alt="Avatar"
          className={styles.avatar}
        />
        <div>
          <h1> Hi Mike</h1>
          <p>Welcome Back!</p>
        </div>
      </div>
      {/* details */}
      <div className={styles.details}>
        <p className={styles.font1}>Today</p>
        <h2 className={styles.font2}>$19,892</h2>
        <p className={styles.font3}>Account Balance</p>
        <Grid container spacing={2}>
          <Grid item xs={4} lg={12}>
            <p className={styles.font1}>$4,000</p>
            <p className={styles.font3}>Year to Year</p>
          </Grid>
          <Grid item xs={4}  lg={12}>
            <p className={styles.font1}>$1,892</p>
            <p className={styles.font3}>Total Interest</p>
          </Grid>
        </Grid>
        <select
          className={styles.select}
          name="dropdown"
          value={value}
          onChange={handleChange}
        >
          <option value="default">I want to</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>
      {/* transaction details */}
      <div className={styles.Transactions}>
        <p className={styles.font1}>Recent Transactions</p>
        <br></br>
        <p className={styles.font3}>2020-06-07</p>
        <p>Withdrawal Transfer to Bank-XXX11</p>
        <p className={styles.font3}>2020-07-21</p>
        <p>Withdrawal Transfer to Bank-XXX11</p>
        <p className={styles.font3}>2020-07-16</p>
        <p>Withdrawal Transfer to Bank-XXX11</p>
      </div>
    </div>
  );
};

export default Profile;
