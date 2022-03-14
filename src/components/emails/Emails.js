import React, { useEffect } from 'react'
import Email from '../email/Email'
import { fetchEmails } from './../../redux/actions'
import { connect } from 'react-redux'

const Emails = (props) => {
  useEffect(() => {
    props.fetchEmails()()
    console.log(props)
  }, [])

  return (
    <div>
      <Email />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { emails: state.emails }
}

const createConnect = connect(mapStateToProps, { fetchEmails })

export default createConnect(Emails)
