import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import PhotoSlider from 'components/PhotoSlider';

const FeedPhoto = props => {console.log(props.closet.closet,'jjjjjjjj')
  return (
    <div className={styles.feedPhoto}>
      <div className={styles.inner}>
        <header>
          <div className={styles.leftColumn}>
            <div className={styles.profileImgBox}>
              <img 
                src={props.profileImg || require('images/default.jpeg')} 
                alt={`${props.name}프로필 이미지`} 
              />
            </div>
            <span>{props.name}</span>            
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.iconBox}>
              <img src={require('images/top.svg')} alt="" />
              <img src={require('images/washer.svg')} alt="" />
            </div>
          </div>
        </header>
        <div className={styles.sliderColumn}>
          <PhotoSlider closetItem={props.closet.top} />
          <PhotoSlider closetItem={props.closet.pants} />
        </div>
      </div>
    </div>
  );
};

FeedPhoto.propType = {
  name: PropTypes.string.isRequired,
  // uid: PropTypes.string.isRequired,
  id: PropTypes.number.isRequiered,
   closet: PropTypes.shape({
  //   top: PropTypes.arrayOf().isRequiered,
  //   pant: PropTypes.arrayOf().isRequiered
   }).isRequired
}
export default FeedPhoto;