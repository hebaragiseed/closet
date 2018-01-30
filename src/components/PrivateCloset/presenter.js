import React from 'react';
import styles from './styles.scss';
import ClosetAction from 'components/ClosetAction';

const PrivateCloset = props => {
  console.log(props.userUid, 'privateCloset')
 return(
  <div className={styles.privateCloset}>
    <div>
      {props.userFeed[props.userUid] ? <Closet {...props} />: "옷장을 만들어주세요"}
    </div>
  </div>
  );
}

const Closet = props => (
  <div>
    <ClosetAction {...props}/>
  </div>
);
export default PrivateCloset;
