import React, { useState, FormEvent, useEffect, ChangeEvent } from 'react';
import styles from './registrationmodal.module.css';



type Props = {
  onChange: () => void;
}

export function RegistrationModal({onChange}: Props) {
  const [usernameValue, setUsernameChange] = useState('');
  const [passwordValue, setPasswordChange] = useState('');
  const [warning, setWarning] = useState(false);

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/v1/profile/register/", {
      method: "POST", // or 'PUT'
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": usernameValue,
        "password": passwordValue,
        "password2": passwordValue
      }),
    });
    console.log(response);
    if(response.status === 201){
      onChange();
    }
    else {
      setWarning(true);
    }
  }
  

  function handleUsernameChange(event: ChangeEvent<HTMLTextAreaElement>){
    setUsernameChange(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLTextAreaElement>){
    setPasswordChange(event.target.value);
  }
  
    return (
   <div>
      <div className={styles.registrationModal}>
        <svg className={styles.closeSvg} onClick={onChange}  width="100" height="100" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6065 21.3934C22.216 21.0029 21.5828 21.0029 21.1923 21.3934C20.8018 21.7839 20.8018 22.4171 21.1923 22.8076L22.6065 21.3934ZM40.9913 42.6066C41.3818 42.9971 42.015 42.9971 42.4055 42.6066C42.796 42.2161 42.796 41.5829 42.4055 41.1924L40.9913 42.6066ZM21.1923 41.1924C20.8018 41.5829 20.8018 42.2161 21.1923 42.6066C21.5828 42.9971 22.216 42.9971 22.6065 42.6066L21.1923 41.1924ZM42.4055 22.8076C42.796 22.4171 42.796 21.7839 42.4055 21.3934C42.015 21.0029 41.3818 21.0029 40.9913 21.3934L42.4055 22.8076ZM21.1923 22.8076L40.9913 42.6066L42.4055 41.1924L22.6065 21.3934L21.1923 22.8076ZM22.6065 42.6066L42.4055 22.8076L40.9913 21.3934L21.1923 41.1924L22.6065 42.6066Z" fill="#C0C0C0"/>
        </svg>

        <a className={styles.textRegistration}>Регистрация</a>
      
        <div className={styles.lineContainer}>
            <svg className={styles.line} width="339" height="2" viewBox="0 0 339 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-0.000732422" y1="1" x2="339.001" y2="1" stroke="black"/>
            </svg>
            <a>или</a>
            <svg className={styles.line} width="339" height="2" viewBox="0 0 339 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-0.000732422" y1="1" x2="339.001" y2="1" stroke="black"/>
            </svg>
        </div>
        <div className={styles.logo}>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48C0 25.3726 0 14.0589 7.02944 7.02944C14.0589 0 25.3726 0 48 0H52C74.6274 0 85.9411 0 92.9706 7.02944C100 14.0589 100 25.3726 100 48V52C100 74.6274 100 85.9411 92.9706 92.9706C85.9411 100 74.6274 100 52 100H48C25.3726 100 14.0589 100 7.02944 92.9706C0 85.9411 0 74.6274 0 52V48Z" fill="#0077FF"/>
              <path d="M53.2083 72.042C30.4167 72.042 17.4168 56.417 16.8751 30.417H28.2917C28.6667 49.5003 37.0833 57.5836 43.7499 59.2503V30.417H54.5002V46.8752C61.0836 46.1669 67.9994 38.667 70.3328 30.417H81.0831C79.2914 40.5837 71.7914 48.0836 66.458 51.1669C71.7914 53.6669 80.3335 60.2086 83.5835 72.042H71.7498C69.2081 64.1253 62.8752 58.0003 54.5002 57.1669V72.042H53.2083Z" fill="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" width="100"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/>
            </svg>
        </div>
        <div className={styles.containerForm}>
          <form className={styles.formsModal} onSubmit={handleSubmit}>
              <textarea value={usernameValue} onChange={handleUsernameChange}>Эл. почта</textarea>
              <textarea value={passwordValue} onChange={handlePasswordChange}>Пароль</textarea>
              <button className={styles.buttonRegist}>Зарегистрироваться</button>
          </form>

          {warning && (<div className={styles.warningContainer}><a className={styles.warning}>Имя пользователя может состоять только из латинских букв и цифр. Ваш пароль должен состоять минимум из 8 символов и 1 буквы</a>
          </div>)}
          <button className={styles.buttonEnter}>Вход</button>
        </div>
      </div>

      <div className={styles.background}></div>

    </div>
        )
    ;
  }
