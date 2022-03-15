import React, { useState } from 'react'
import './email.css'

const Email = ({ email }) => {
  const { from, subject, date, short_description } = email
  const localDate = new Date(date).toLocaleDateString()
  const localTime = new Date(date).toLocaleTimeString()
  return (
    <div className="email">
      <div className="profile-pic">
        <div className="profile-name">{`${from.name[0].toUpperCase()}`}</div>
      </div>
      <div className="desc">
        <div className="name">
          From: <strong>{`${from.name} <${from.email}>`}</strong>
        </div>
        <div className="subject">
          Subject: <strong>{`${subject}`}</strong>
        </div>
        <div className="smallDesc">{`${short_description}`}</div>
        <div className="datetime">{`${localDate} ${localTime}`}</div>
      </div>
    </div>
  )
}

export default Email
