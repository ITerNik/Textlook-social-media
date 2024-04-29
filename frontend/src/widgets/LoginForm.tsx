import {Input} from "../slices/Input.tsx";
import {ChangeEvent, ReactNode, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

interface LoginFormProps {
    title: string,
    requestTemplate: object
    url: string
    switchFormText?: ReactNode
}

export function LoginForm(props: LoginFormProps) {
    const navigate = useNavigate()
    const [request, setRequest] = useState(props.requestTemplate)

    function inputChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setRequest({...request, [name]: value})
    }
    function onSubmitHandler() {
        console.log(request)
        axios.post(`http://localhost:8080/handlers/auth/${props.url}.php`, request)
            .then(res => {sessionStorage.setItem("token", res.data.token); navigate('/')})
            .catch(err => alert(err))
    }

    return (
        <form className="text-white text-3xl min-h-[60%] flex flex-col w-[50%] rounded-md overflow-hidden bg-white">
            <h2 className="text-3xl flex-1 flex items-center justify-center p-6 bg-amber-600 font-bold cursor-pointer group"
                onClick={onSubmitHandler}>
                <span className="transition-all ease group-hover:scale-105">
                    {props.title}
                </span>
            </h2>
            {Object.entries(props.requestTemplate).map(([key, val]) => <Input name={key} placeholder={val} onChange={inputChangeHandler} key={key}/>)}
            {props.switchFormText && <p className="flex-1 flex justify-center items-center text-xl font-light p-2 bg-slate-400">
                {props.switchFormText}
            </p>}
        </form>
    )
}