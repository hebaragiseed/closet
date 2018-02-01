import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const NewClothes = props => {console.log(props)
  return(
  <div className={styles.newClothes}>
    <div className={styles.container}>
      <header>
        <span onClick={props.closeNewClothes} >
          <Ionicon  icon="md-close-circle" fontSize="25px"></Ionicon>         
        </span>
        <span>저장할 옷의 종류와 사진을 선택해주세요</span>
      </header>
      <form onSubmit={ props.handleSubmit}>
        <label>종류 :
          <select name="category" onChange={props.handleImageChange} value={props.categoryValue}>
            <option defaultValue='' value=''>-- 선택 --</option>
            <option value='top'>top</option>
            <option value='pants'>pants</option>        
          </select> 
        </label>
        <label>사진 :
          <input 
            type="text"
            name="file"            
            onChange={props.handleImageChange}
            value={props.fileValue}
            placeholder="사진주소를 넣어주세요..."
          />
        </label>
        <div className={styles.preview}>
          {props.fileValue ? 
            <img src={props.fileValue} alt=""/> 
            : <span>이미지 미리보기<img src={require('images/top.svg')} alt=""/></span> 
          }
        </div>
        <button type="submit">저장하기</button>
        <button onClick={props.closeNewClothes}>취소</button>
      </form>      
    </div>
  </div>
);
}
NewClothes.propType = {
  fileValue:  PropTypes.string.isRequired,
  categoryValue:  PropTypes.string.isRequired,
  handleImageSubmit:  PropTypes.func.isRequired,
  handleSubmit:  PropTypes.func.isRequired,
  closeNewClothes: PropTypes.func.isRequired,

};
export default NewClothes;