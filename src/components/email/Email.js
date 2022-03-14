import React from 'react'
import './email.css'

const Email = () => {
  return (
    <div className="email">
      <div className="profile-pic">
        <div className="profile-name">{`E`}</div>
      </div>
      <div className="desc">
        <div className="name">
          From: <strong>{`Elon Musk <elon.musk@gmail.com>`}</strong>
        </div>
        <div className="subject">
          Subject: <strong>{`Lorem ipsum`}</strong>
        </div>
        <div className="smallDesc">
          {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, beatae!`}
        </div>
        <div className="datetime">10/11/2020</div>
      </div>
    </div>
  )
}

export default Email
