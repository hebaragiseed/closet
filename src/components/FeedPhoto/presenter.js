import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const FeedPhoto = props => {
  console.log(this.props)
  return (
    <div className={styles.feedPhoto}>
      <div className={styles.inner}>
        <header>
          <div className={styles.profileImgBox}>
            <img 
              src={props.profileImg || require('images/noPhoto.jpg')} 
              alt={`${props.name}프로필 이미지`} />
          </div>
          <span>{props.name}</span>
        </header>
        <div className={styles.column}>
          
        </div>
      </div>
    </div>
  );
};

FeedPhoto.propType = {
  name: PropTypes.string.isRequired,
  // uid: PropTypes.string.isRequired,
  id: PropTypes.number.isRequiered,
  // closet: PropTypes.shape({
  //   top: PropTypes.arrayOf().isRequiered,
  //   pant: PropTypes.arrayOf().isRequiered
  // }).isRequired
}
export default FeedPhoto;