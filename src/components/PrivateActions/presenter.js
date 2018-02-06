//부모 component <PrivatePhotoSlider>
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PrivateActions = props => {
  return (
    <div className={props.washer ? styles.privateActionsWasher : styles.privateActions} 
      tabIndex="0">
      <div className={styles.iconBox}>
        <div className={styles.washerBox} tabIndex="1">
          <img 
            src={require('images/washer.svg')}
            alt="빨래 중 표시 아이콘" 
            onClick={props.handleWasherClick}
            title="빨래 중"
            />  
        </div>
        <div className={styles.deleteIcon} tabIndex="2">
          <img 
            src={require('images/delete-icon.svg')} 
            alt="삭제하기 아이콘" 
            onClick={props.handleDeleteClothes}
            className={styles.deleteIcon} 
            title="삭제하기"   
          />
        </div>
      </div>
    </div>
  );
};
PrivateActions.propTypes = {
  handleWasherClick: PropTypes.func.isRequired,
  handleDeleteClothes: PropTypes.func.isRequired,
  washer: PropTypes.bool.isRequired
}

export default PrivateActions;