import React, { useEffect, useState } from 'react';

export default function Login() {
    const [userInfo, setUserInfo] = useState();

    const fetchBoard = () => {
        fetch('http://localhost:3000/board', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('auth-token')}`,
            },
        });
    };

    const onLogin = () => {
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email: 'user1@email.com',
                password: 'user1pw',
            }),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                localStorage.setItem('auth-token', data.token);
            });
    };

    return (
        <div>
            <button onClick={onLogin}>로그인</button>
            <button onClick={fetchBoard}>보드 fetch</button>
        </div>
    );
}
