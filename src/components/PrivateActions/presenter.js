import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PrivateActions = props => {
  console.log(props.washer, 'washer///11111')
  return (
    <div className={props.washer ? styles.privateActionsWasher : styles.privateActions} >
      <div className={styles.iconBox}>
        <div className={styles.washerBox}>
          {props.washer ? (<img 
            src={require('images/washer.svg')}
            alt="" 
            onClick={props.handleWasherClick}
            />
            ):(<img 
              src={require('images/washer.svg')} 
              alt="" 
              onClick={props.handleWasherClick}
            />)
          }  
        </div>
        <div className={styles.deleteIcon}>
          <img 
            src={require('images/delete-icon.svg')} 
            alt="" 
            onClick={props.handleDeleteClothes}
            className={styles.deleteIcon}         
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