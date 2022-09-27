import '../../styles/header.scss';

import React, { useEffect, useState } from 'react';
import { ProjetService } from '../../core/services';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const LikeButton = ({
  user,
  projet,
  size = 20,
  color = "#c5473b",
  likeCount = (value) => { },
  errorMessage = (message) => { },
  setError = (value) => { }
}) => {

  const [like, setLike] = useState(false);

  const userLike = (likes) => {
    if (likes.map(like => like.user).includes(user?.id)) {
      setLike(true)
    } else {
      setLike(false)
    };
  }

  const likeProject = () => {
    if (!user) return;

    ProjetService.likeProjet(projet.id, user?.id).then(
      (rs) => {
        userLike(rs.data.data.like || []);
        likeCount((rs.data.data.like || []).length);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        errorMessage(resMessage);
        setError(true)
      }
    );
  }

  useEffect(() => {
    if (projet) {
      userLike(projet.likes || []);
      likeCount((projet.likes || []).length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projet])

  return like ? (
    <AiFillHeart className="cursor-pointer" onClick={() => likeProject()} color={color} fill={color} size={size} />
  ) : (
    <AiOutlineHeart className="cursor-pointer" onClick={() => likeProject()} color={color} fill={color} size={size} />
  )

}

export default LikeButton;