'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./page.css"

export default function LoginComponents() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const { token } = await res.json();
                localStorage.setItem('token', token);
                router.push('/users');
            } else {
                const errorData = await res.json();
                alert(errorData.message || 'Невірні дані');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Помилка під час авторизації, спробуйте ще раз.');
        }
    };

    return (
        <div className="login">
            <span>Email</span>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <span>Password</span>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
            />
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    );
}
