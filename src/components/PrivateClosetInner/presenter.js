//부모 component <PrivateCloset>
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import PrivatePhotoSlider from 'components/PrivatePhotoSlider';
import PrivateNewClothes from 'components/PrivateNewClothes';

const PrivateClosetInner = props => {
  return (
    <div className={styles.privateClosetInner}>
      <div className={styles.inner}>
        <header>
          <div className={styles.leftColumn}>
            <div className={styles.profileImgBox}>
              <img 
                src={props.profileImg || require('images/no-photo.jpg')} 
                alt={`${props.name}프로필 이미지`} 
              />
            </div>
            <span>{props.name}</span>            
          </div>
          <div className={styles.rightColumn}>
            <button className={styles.iconBox} tabIndex="0">
              <img 
                src={require('images/top.svg')}
                alt="새로운 옷 저장하기 아이콘"
                onClick={props.openNewClothes}
                className={styles.topIcon}
                title="새로운 옷 저장"                
              />             
            </button>
          </div>
        </header>
        <div className={styles.sliderColumn}>
          <PrivatePhotoSlider closetItem={props.closet.top} />
          <PrivatePhotoSlider closetItem={props.closet.pants} />
        </div>
      </div>
      {props.seeingNewClothes ? 
        (<PrivateNewClothes 
          closeNewClothes={props.closeNewClothes}
          topLength={props.closet.top} 
          pantsLength={props.closet.pants}
        />): null
      }
    </div>
  );
};

PrivateClosetInner.propType = {
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.number.isRequiered,
   closet: PropTypes.shape({
    top: PropTypes.arrayOf().isRequiered,
    pant: PropTypes.arrayOf().isRequiered
   }).isRequired,
  seeingNewClothes: PropTypes.bool.isRequired,
  openNewClothes: PropTypes.func.isRequired,
  closeNewClothes: PropTypes.func.isRequired,
}
export default PrivateClosetInner;