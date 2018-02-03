import React from 'react';
import styles from './styles.scss';
import PrivateClosetInner from 'components/PrivateClosetInner';

const PrivateCloset = props => {
  //console.log(props.userFeed[props.uid].closet, 'privateCloset')
 return(
  <div className={styles.privateCloset}>
    <div>
      {props.userFeed[props.uid]? 
        <Closet name={props.userFeed[props.uid].name} userUidCloset={props.userFeed[props.uid]} 
        />
        : <MakeCloset {...props}/>
      }
    </div>
  </div>
  );
}

const Closet = props => (
  <div>
    <PrivateClosetInner name={props.name} closet={props.userUidCloset.closet} />
  </div>
);
const MakeCloset = props =>{ console.log(' 제발' ,props)
  return(
  <div className={styles.makeCloset}>
    <p>지금은 {props.name}님의 옷장이 없어요? 만들어주세요</p>
    <button onClick={props.buttonNewCloset}>내옷장 만들기</button>
  </div>
)}
export default PrivateCloset;
