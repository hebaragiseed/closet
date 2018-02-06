//부모 component <PrivateClosetInner>
import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';
import PrivateActions from 'components/PrivateActions';

const PrivatePhotoSlider = props => {
  const {item, itemIdx} = props;
  const itemOrder0 = item[`${itemIdx}`];
  const itemOrder1 = item[`${itemIdx+1}`];
  const itemOrder2 = item[`${itemIdx+2}`];
  const itemOrder3 = item[`${itemIdx+3}`];
  //const itemIdx = props.itemIdx;
  return (
    <div className={styles.privatePhotoSlider}>  
      <div className={styles.photoBox}>
        <div className={`${styles.itemBox} ${styles.itemBox1}`}>
          <div className={styles.heartActionsBox}>
            <img src={itemOrder0 ? itemOrder0.image : require('images/default-top.svg')} alt="" />
            { itemOrder0 ? <PrivateActions
              likeCount={itemOrder0.like_count}
              isLiked={itemOrder0.is_liked}
              imageId={itemOrder0.id}
              category={itemOrder0.category}
              creatorUid={itemOrder0.creator_uid}
              hearts={itemOrder0.hearts || false}
              washer={itemOrder0.is_washed}              
             /> : null }  
            </div>  
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox2}`}>
          <div className={styles.heartActionsBox}>        
            <img src={itemOrder1 ? itemOrder1.image : require('images/default-top.svg') } alt="" />
            { itemOrder1 ? <PrivateActions 
              likeCount={itemOrder1.like_count}
              isLiked={itemOrder1.is_liked}
              imageId={itemOrder1.id}
              category={itemOrder1.category}
              creatorUid={itemOrder1.creator_uid}
              hearts={itemOrder1.hearts || false}
              washer={itemOrder1.is_washed}              
             /> : null }  
            </div>
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox3}`}>
          <div className={styles.heartActionsBox}>        
            <img src={itemOrder2 ? itemOrder2.image : require('images/default-top.svg')} alt="" />
            { itemOrder2 ? <PrivateActions 
              likeCount={itemOrder2.like_count}
              isLiked={itemOrder2.is_liked}
              imageId={itemOrder2.id}
              category={itemOrder2.category}
              creatorUid={itemOrder2.creator_uid}
              hearts={itemOrder2.hearts || false}
              washer={itemOrder2.is_washed}              
             /> : null }  
          </div> 
        </div>
        <div className={`${styles.itemBox} ${styles.itemBox4}`}>
          <div className={styles.heartActionsBox}>        
            <img src={itemOrder3 ? itemOrder3.image : require('images/default-top.svg')} alt="" />
            { itemOrder3 ? <PrivateActions 
              likeCount={itemOrder3.like_count}
              isLiked={itemOrder3.is_liked}
              imageId={itemOrder3.id}
              category={itemOrder3.category}
              creatorUid={itemOrder3.creator_uid}
              hearts={itemOrder3.hearts || false}
              washer={itemOrder3.is_washed}       
             /> : null }  
          </div>
        </div>  
        <button 
          className={styles.nextBtn}
          onClick={props.nextBtn}
        >
          <Ionicon icon="md-arrow-dropright" fontSize="30px" color="black" />
          </button>
        <button 
          className={styles.prevBtn}
          onClick={props.prevBtn}
        >
          <Ionicon icon="md-arrow-dropleft" fontSize="30px" color="black" />
        </button>
      </div>
    </div>
  );
};
PrivatePhotoSlider.propTypes = {
  itemIdx: PropTypes.number.isRequired,
  prevBtn: PropTypes.func.isRequired,
  nextBtn: PropTypes.func.isRequired,
};
export default PrivatePhotoSlider;