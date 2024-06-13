import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Login.module.css';
import axios from '../Components/hooks/axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
       
    
            axios
                .post("/user/login", { email, password })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch((e) => {
                    console.log(e);
                    
                    
                });
    
        setError('');
        navigate('/Login/Home');
    };

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="../login1.jpg" alt="Loading..." />
            </div>
            <div className={styles.login_area}>
                <div className={styles.login_box}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>Log into Exclusive</h1>
                        <h5>Enter your details below</h5>
                        {error && <div className={styles.error}>{error}</div>}
                        <div className={styles.text_field}>
                            <input 
                                type="text" 
                                placeholder="Email or Phone Number" 
                                value={email}required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.text_field}>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button 
                            type="button" 
                            className={styles.btn}
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <div className={styles.footer}>
                            <Link to="/forget">
                                <h6>Forgot password?</h6>
                            </Link>
                            <Link to="/create">
                                <h6>Create an account</h6>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
