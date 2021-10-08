import React from 'react';
import image from '../../../../assets/img/post.png'

const PostConent = () => {
  return (
    <div className="post-content">
      <span>Titre de la publication</span>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </p>

      <div href="" className="shared-post">
        <a href="">
          <img src={image} alt="" />
        </a>
      </div>
    </div>

  )
}

export default PostConent;
