import React from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

export default function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('redirect'));
  console.log(searchParams.get('page'));
  console.log(searchParams.get('limit'));

  return (
    <div>
      LoginPage
      <button
        onClick={() => {
          navigate('/'); //홈으로 가기
          //   navigate(-1); //뒤로 가기
          //   navigate('/', {
          //     state: {
          //       some: 'value',
          //     },
          //   });
        }}
      >
        홈으로
      </button>
    </div>
  );
}
