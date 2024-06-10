import { useNavigate } from 'react-router-dom';
import styles from '../css/Forget.module.css';

const Forget = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="../forget.jpg" alt="Loading..." />
            </div>
            <div className={styles.forgot}>
                <form>
                    <h1>Forget Password</h1>
                    <h4>Enter your details below</h4>
                    <div className={styles.text_field}>
                        <input 
                            type="text" 
                            placeholder="Email or Phone Number" 
                        />
                    </div>
                    <div className={styles.footer}>
                        <button 
                            type="button" 
                            className={styles.btn} 
                            onClick={() => {
                                navigate("/forget/Verify");
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Forget;
