import React,{useRef} from 'react';
import styles from './upload.module.css';

const Upload = (props) => {
    const messageRef = useRef();    
    const genderRef = useRef(); 
    const overcoatRef = useRef();   
    const topRef = useRef();    
    const typeRef = useRef();   
    const underwearRef = useRef();  
    const suitablityRef = useRef(); 
    const styleRef = useRef();

    const onClick = (event) => {
        event.preventDefault();
        const message = messageRef.current.value;
        const gender = genderRef.current.value;
        const overcoat = overcoatRef.current.value;
        const top = topRef.current.value;
        const type = typeRef.current.value;
        const underwear = underwearRef.current.value;
        const suitablity = suitablityRef.current.value;
        const style = styleRef.current.value;
    }
    
    return (
        <form className={styles.upload}>
            <h1 className={styles.title}>너의 날씨를 기록해</h1>
            <section>
                <div className={styles.imageBox}>
                    <h2 className={styles.subtitle}>사진업로드</h2>
                    <div className={styles.images}>
                        <input className={styles.image} type="file" />
                        <input className={styles.image} type="file" />
                        <input className={styles.image} type="file" />
                        <input className={styles.image} type="file" />
                        <input className={styles.image} type="file" />
                    </div>    
                </div>
                <div className={styles.messageBox}>
                    <h2 className={styles.subtitle}>내용</h2>
                    <textarea ref={messageRef}className={styles.message} name="message" ></textarea>
                </div>
                <div className={styles.categoryBox}>
                    <h2 className={styles.subtitle}>카테고리</h2>
                    <div className={styles.categories}>
                        <select ref={genderRef}className={styles.category} name="gender" id="">
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        <select ref={overcoatRef}className={styles.category} name="overcoat" id="">
                            <option value="overcoat">아우터</option>
                        </select>
                        <select ref={topRef}className={styles.category} name="top" id="">
                            <option value="top">상의</option>
                        </select>
                        <select ref={typeRef}className={styles.category} name="type" id="">
                            <option value="type">체질</option>
                        </select>
                        <select ref={underwearRef}className={styles.category} name="underwear" id="">
                            <option value="underwear">속옷</option>
                        </select>
                        <select ref={suitablityRef}className={styles.category} name="suitablity" id="">
                            <option value="suitablity">적당함</option>
                        </select>
                        <select ref={styleRef}className={styles.category} name="style" id="">
                            <option value="style">스타일</option>
                        </select>
                    </div>    
                </div>
            </section>
            <button className={styles.button} onClick={onClick}>확인</button>
        </form>
    )
};

export default Upload;