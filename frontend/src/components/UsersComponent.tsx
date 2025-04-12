'use client';

import { useEffect, useState } from 'react';

interface User {
    _id: string;
    email: string;
    role: string;
}

export default function HomePage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('http://localhost:3001/users');
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error('Помилка при завантаженні користувачів:', err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Список користувачів</h1>
            <ul>
                <h1>users</h1>
                {users.map((user) => (
                    <li key={user._id}>{user.email} — {user.role}</li>
                ))}
            </ul>
        </div>
    );
}
