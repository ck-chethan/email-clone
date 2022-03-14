import getEmails from '../../getEmails'

const fetchEmails = () => async (dispatch) => {
  const emails = await getEmails('/')
  console.log(emails)
  dispatch({ type: 'FETCH_EMAILS', payload: emails.data })
}

export { fetchEmails }
