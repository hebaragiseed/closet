import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const FeedPhoto = props => {
  console.log(this.props)
  return <div>helllo</div>
};

FeedPhoto.propType = {
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.number.isRequiered,
  closet: PropTypes.shape({
    top: PropTypes.arrayOf().isRequiered,
    pant: PropTypes.arrayOf().isRequiered
  }).isRequired
}
export default FeedPhoto;