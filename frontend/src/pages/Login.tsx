import {NavLink, useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import {Input} from "../slices/Input.tsx";
import axios from "axios";

interface LoginProps {
    username: string,
    password: string,
}

export function Login() {
    const initRequest: LoginProps = {username: '', password: ''}
    const [request, setRequest] = useState(initRequest)
    const navigate = useNavigate()

    function inputChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setRequest({...request, [name] : value})
    }

    function onSubmitHandler() {
        axios.post(`http://localhost:8080/handlers/auth/login.php`, request)
            .then(res => {sessionStorage.setItem("token", res.data.token); navigate('/')})
            .catch(err => alert(err))
    }

    return (
        <div className="bg-slate-200 flex flex-col h-screen w-full items-center justify-center">
            <form className="text-white text-3xl min-h-[60%] flex flex-col w-[50%] rounded-md overflow-hidden bg-white">
                <h2 className="text-3xl flex-1 flex items-center justify-center p-6 bg-amber-600 font-bold cursor-pointer group"
                    onClick={onSubmitHandler}>
                <span className="transition-all ease group-hover:scale-105">Войти</span>
                </h2>
                {Object.keys(request).map(key =>
                    <Input name={key} onChange={inputChangeHandler} key={key} className="p-6"/>
                )}
                <p className="flex-1 flex justify-center items-center text-xl p-2 font-light bg-slate-400">
                    <span>Нет аккаунта? <NavLink to="/register" className="font-bold">Зарегистрируйся</NavLink></span>
                </p>
            </form>
        </div>
    )
}