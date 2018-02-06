//부모 component <App>
import React from 'react';
import styles from './styles.scss';
import PrivateClosetInner from 'components/PrivateClosetInner';
import PrivateMakeCloset from 'components/PrivateMakeCloset';

const PrivateCloset = props => {
  return(
    <div className={styles.privateCloset}>
      <div>
        {props.userFeed[props.uid] ? 
           <Closet name={props.userFeed[props.uid].name} userUidCloset={props.userFeed[props.uid]} />
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
    <div className={styles.innerBox}>
      <p>지금은
       <span className={styles.userName}>{props.name}</span>
       님의 옷장이 없어요. 만들어주세요!
      </p>
      <button onClick={props.makeClosetOpen}>내 옷장 만들기</button>
    </div>
    {props.makeClosetSeeing ? 
      <PrivateMakeCloset makeClosetClose={props.makeClosetClose} /> 
      : null
    }
  </div>
)}
export default PrivateCloset;
