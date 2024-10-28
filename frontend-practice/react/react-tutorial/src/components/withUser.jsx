import { useState, useEffect } from 'react';

export default function withUser(Component) {
    return function WrappedComponent({ userId, ...props }) {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            async function fetchUser() {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const userData = await response.json();
                setUser(userData);
                setLoading(false);
            }
            fetchUser();
        }, [userId]);
        if (loading) {
            return <p>Loading user...</p>;
        }
        return <Component user={user} {...props} />;
    };
}
