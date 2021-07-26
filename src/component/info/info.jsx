import React, { useEffect, useRef, useState } from 'react';
import styles from './info.module.css';
import Comments from '../comments/comments';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const Info = ({ data,post, updatePost, deletePost, filteredComments, uploadComment,filteredLikes,pushLikes,popLikes,userId }) => {
    const messageRef = useRef();
    const [filteredLikesId, setFilteredLikesId] = useState('');
    const [edit, setEdit] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [likedIcon, setLikedIcon] = useState(farHeart);
    const history = useHistory();
    useEffect(() => {
        //해당 게시물 좋아요 클릭여부 체크 
        for (let i = 0; i < filteredLikes.length; i++) {
            if (filteredLikes[i].userId === userId) {
                setFilteredLikesId(filteredLikes[i].likeId);
                setLikedIcon(fasHeart);
                break;
            }
        }
        if (likedIcon === '')
            setLikedIcon(farHeart);
    },[userId,filteredLikes, filteredLikesId, likedIcon])
    const onOpenDropdown = () => {
        if (dropdown)
            setDropdown(false);
        else {
            if (userId === post.userId)
                setDropdown(true);
        }
    }
    const onEdit = () => {
        setEdit(true);
        setDropdown(false);
    }
    const onDelete = () => {
        console.log("userID",userId)
        deletePost(post.postId, userId);
        history.push({
            pathname: '/mypage',
            state:{userId}
        })
    }
    const onIconClick = () => {
        if (likedIcon === farHeart) {
            pushLikes(post.postId, userId);
            setLikedIcon(fasHeart);
        }
        else {
            popLikes(post.postId, userId);
            setLikedIcon(farHeart);
        }
    }
    const onSubmit = () => {
        //데이터처리
        updatePost(post.postId,messageRef.current.value,userId)
        setEdit(false);
    }
    return (
        <div className={styles.info}>
            <header className={styles.header}>
                <div className={styles.userContainer}>
                    <img className={styles.image} src={process.env.PUBLIC_URL + '/images/react.png'} alt="'" />
                    <span className={styles.user}>@{post.userId}</span>
                </div>
                <FontAwesomeIcon className={styles.icon} icon={faBars} onClick={onOpenDropdown} />
                {dropdown &&
                    <div className={styles.dropdown}>
                        <button className={styles.button1} onClick={onEdit}>EDIT</button>
                        <button className={styles.button2} onClick={onDelete}>DELETE</button>
                    </div>
                }
            </header>
            <section className={styles.messageContainer}>
                {!edit &&
                    <>
                        <p>{post.description}</p>
                        <div className={styles.category}>{`#${post.gender}#${post.overcoat}#${post.top}#${post.constitution}#${post.underwear}#${post.suitablity}#${post.style}`}</div>
                    </>
                }
                {edit &&
                    <div className={styles.updateMessageContainer}>
                        <textarea ref={messageRef} className={styles.message} spellCheck="false" defaultValue={post.description}></textarea>
                        <button className={styles.messageButton} onClick={onSubmit}>확인</button>
                    </div>
                }
            </section>
            {!edit && <>
            <section className={styles.likedContainer}>
                <FontAwesomeIcon className={styles.likedIcon} icon={likedIcon} onClick={onIconClick} />
                <span className={styles.likedMessage}>{filteredLikes.length}명이 공감하였습니다.</span>
                </section>
                <Comments data={data} filteredComments={filteredComments} uploadComment={uploadComment} postId={post.postId} userId={userId}></Comments>
            </>
            }
        </div>
    );
};

export default Info;