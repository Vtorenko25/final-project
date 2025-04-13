'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./page.css"
import {ITokens} from "@/app/models/ITokens";

export default function LoginComponent() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await fetch('http://localhost:3001/auth/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const tokensPair:ITokens =await res.json();
                localStorage.setItem('tokens', JSON.stringify(tokensPair));
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
