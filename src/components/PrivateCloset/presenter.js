import React from 'react';
import styles from './styles.scss';
import ClosetAction from 'components/ClosetAction';

const PrivateCloset = props => {
  console.log(props.uid, 'privateCloset')
 return(
  <div className={styles.privateCloset}>
    <div>
      {props.userFeed[props.uid] ? 
        <Closet name={props.userFeed[props.uid].name} userUidCloset={props.userFeed[props.uid]} 
        />
        : "옷장을 만들어주세요"
      }
    </div>
  </div>
  );
}

const Closet = props => (
  <div>
    <ClosetAction name={props.name} closet={props.userUidCloset.closet} />
  </div>
);
export default PrivateCloset;
