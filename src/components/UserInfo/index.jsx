import React from 'react';
import styles from './UserInfo.module.scss';

export const UserInfo = ({ avatarUrl, name, additionalText }) => {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={avatarUrl || '/noavatar.png'} alt={name.first} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{name.first} {name.last}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
