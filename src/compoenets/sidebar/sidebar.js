import React from 'react';
import styles from "./sidebar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import EmojiNatureOutlinedIcon from '@mui/icons-material/EmojiNatureOutlined';
export const MobileSidebar = () => {
  return (
    <div className={styles.Mobilesidebar}>
<HomeIcon className={styles.icon}/>
<KeyboardAltOutlinedIcon className={styles.icon}/>
<ArticleOutlinedIcon className={styles.icon}/>
<PersonOutlineIcon className={styles.icon}/>
<SearchIcon className={styles.icon}/>
    </div>
  )
}

export const WindowSidebar=()=>{
return (
    <div className={styles.Windowsidebar}>
        <div className={styles.container1}>
            <EmojiNatureOutlinedIcon className={styles.icon}/>
        <SearchIcon className={styles.icon}/>
        </div>
        <div className={styles.container2}>
        <HomeIcon className={styles.icon}/>
<KeyboardAltOutlinedIcon className={styles.icon}/>
<ArticleOutlinedIcon className={styles.icon}/>
<PersonOutlineIcon className={styles.icon}/>
        </div>
        <div className={styles.container3}>
            <NotificationsNoneOutlinedIcon className={styles.icon}/>
            <LogoutOutlinedIcon className={styles.icon}/>
        </div>

    </div>
)
}
