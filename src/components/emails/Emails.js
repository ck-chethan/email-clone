import React, { useEffect, useState } from 'react'
import Email from '../email/Email'
import { fetchEmails } from './../../redux/actions'
import { connect } from 'react-redux'
import EmailBody from '../emailBody/EmailBody'
import './emails.css'

const Emails = ({ emails, fetchEmails }) => {
  useEffect(() => {
    fetchEmails()
    console.log(emails)
  }, [])

  const [masterSlave, setMasterSlave] = useState(false)

  const renderedList = () =>
    emails.map((email) => {
      console.log(email)
      return <Email key={email.id} email={email} />
    })

  const renderMasterSlave = () => {
    return (
      <div className="master-slave">
        <div className="master">{renderedList()}</div>
        <div className="slave">
          <EmailBody />
        </div>
      </div>
    )
  }

  return <div>{masterSlave ? renderedList() : renderMasterSlave()}</div>
}

const mapStateToProps = (state) => {
  console.log(state)
  return { emails: state.emails }
}

const createConnect = connect(mapStateToProps, { fetchEmails })

export default createConnect(Emails)
