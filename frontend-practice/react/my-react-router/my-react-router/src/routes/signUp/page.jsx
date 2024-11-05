import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signUp } from '../../lib/apis/user';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const signUpSubmit = async () => {
    const response = await signUp(signUpData.email, signUpData.password);
    if (response._id != null) {
      alert('회원가입에 성공했습니다!');
      navigate('/');
    } else {
      alert('회원가입에 실패했습니다...');
    }
  };
  return (
    <div>
      Sign Up
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              signUpData.email = e.target.value;
              setSignUpData(signUpData);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              signUpData.password = e.target.value;
              setSignUpData(signUpData);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            signUpSubmit();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
