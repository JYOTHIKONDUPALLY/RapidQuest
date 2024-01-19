import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MobileSidebar, WindowSidebar } from '../sidebar/sidebar';
import Profile from "../profile/profile";
import Analysis from '../analysis/Analysis';
import Stratergy from '../stratergy/stratergy';
import styles from "./home.module.css"
export default function Home() {
  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <div className={styles.container}>
        <div className={StyleSheet.sidebar}>
        {isMobile ? (
        <MobileSidebar />
      ) : (
        <WindowSidebar />
      )}
        </div>
        <div>
            <Profile/>
        </div>
        <div>
          <Analysis/>
        </div>
        <div>
          <Stratergy/>
        </div>
        
     
      
    </div>
  );
}
