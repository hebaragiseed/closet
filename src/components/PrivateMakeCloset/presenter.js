import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const PrivateMakeCloset = props => {
  return(
  <div className={styles.privateMakeCloset}>
    <div className={styles.container}>
      <header>
        <span onClick={props.makeClosetClose}>
          <Ionicon  icon="md-close-circle" fontSize="25px"></Ionicon>         
        </span>
        <span className={styles.headerText}>저장할 옷의 종류와 사진을 선택해주세요</span>
      </header>
      <form onSubmit={ props.handleSubmit}>
        <div className={`${styles.columnLeft} ${styles.column}`}>
          <span>Top</span>
          <label>사진 :
            <input 
              type="text"
              name="fileTop"            
              onChange={props.handleImageChange}
              value={props.fileTopValue}
              placeholder="사진주소를 넣어주세요"
            />
          </label>
          <div className={styles.preview}>
            {props.fileTopValue ? 
              <img src={props.fileTopValue} alt="내가 넣은 사진 미리보기"/> 
              : <span >이미지 미리보기<img src={require('images/top.svg')} alt="미리보기 사진"/></span> 
            }
          </div>
        </div>
        <div className={`${styles.columnRight} ${styles.column}`}>
          <span>Pants</span>
          <label>사진 :
            <input 
              type="text"
              name="filePants"            
              onChange={props.handleImageChange}
              value={props.filePantsValue}
              placeholder="사진주소를 넣어주세요"
            />
          </label>
          <div className={styles.preview}>
            {props.filePantsValue ? 
              <img src={props.filePantsValue} alt="내가 넣은 사진 미리보기"/> 
              : <span>이미지 미리보기<img src={require('images/top.svg')} alt="미리보기 사진"/></span> 
            }
          </div>
        </div>
        <button type="submit">저장하기</button>
        <button onClick={props.closeNewClose}>취소</button>
      </form>      
    </div>
  </div>
);
}
PrivateMakeCloset.propType = {
  fileTopValue: PropTypes.string.isRequired,
  filePantValue: PropTypes.string.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  makeClosetClose: PropTypes.func.isRequired,

};
export default PrivateMakeCloset;