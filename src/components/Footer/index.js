import React from 'react';
import styles from './styles.scss';

const Footer = (props) => (
  <footer className={styles.footer}>
    <div className={styles.leftColumn}>
      <span>상호: (주)옷장</span>
      <span>대표: hebaragiseed</span>
      <span>Email: hebaragiseed@gmail.com</span>
      <span>고객센터: 000-0000-0000</span>
    </div>
    <div className={styles.rightColumn}>
      <span className={styles.copyright}>© 2018 옷장</span>
    </div>
  </footer>
);

export default Footer;