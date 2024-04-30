import {NavLink, useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import axios from "axios";
import {Input} from "../slices/Input.tsx";

interface RegisterProps {
    name: string,
    surname: string,
    username: string,
    password: string,
    repeated: string
}

export function Register() {
    const initRequest: RegisterProps = {name: '', surname: '', username: '', password: '', repeated: ''}
    const [request, setRequest] = useState<RegisterProps>(initRequest)
    const navigate = useNavigate()

    function inputChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setRequest({...request, [name] : value})
    }

    function onSubmitHandler() {
        axios.post(`http://localhost:8080/handlers/auth/register.php`, request)
            .then(res => {sessionStorage.setItem("token", res.data.token); navigate('/')})
            .catch(err => alert(err))
    }

    return (
        <div className="bg-slate-200 flex flex-col h-screen w-full items-center justify-center">
            <form className="text-white text-3xl min-h-[60%] flex flex-col w-[50%] rounded-md overflow-hidden bg-white">
                <h2 className="text-3xl flex-1 flex items-center justify-center p-6 bg-amber-600 font-bold cursor-pointer group"
                    onClick={onSubmitHandler}>
                    <span className="transition-all ease group-hover:scale-105">Зарегистрироваться</span>
                </h2>
                {Object.keys(request).map(key =>
                    <Input name={key} onChange={inputChangeHandler} password={request.password} key={key}/>
                )}
                <p className="flex-1 flex justify-center items-center text-xl font-light p-2 bg-slate-400">
                    <span>Уже есть аккаунт? <NavLink to="/login" className="font-bold">Войти</NavLink></span>
                </p>
            </form>
        </div>
    )
}