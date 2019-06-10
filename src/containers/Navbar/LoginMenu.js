import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { LOGIN_PATH, SIGNUP_PATH } from 'constants/paths'

const buttonStyle1 = {
  color: 'white',
  textDecoration: 'none',
  alignSelf: 'center',
  background: '#8b00ff',
  margin: 18
}

const buttonStyle2 = {
  color: 'white',
  textDecoration: 'none',
  alignSelf: 'center',
  background: '#8b00ff',
  margin: 10
}

export const LoginMenu = () => (
<div>
<Button style={buttonStyle1} component={Link} to={SIGNUP_PATH}>가입하기</Button>
<Button style={buttonStyle2} component={Link} to={LOGIN_PATH}>로그인</Button>
</div>
)

export default LoginMenu