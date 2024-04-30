import {Input} from "../slices/Input.tsx";
import {ChangeEvent, Dispatch, ReactNode, SetStateAction} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


interface LoginFormProps {
    title: string,
    url: string,
    setRequest: Dispatch<SetStateAction<any>>
    request: object
    placeHolders: object
    errors: object
    switchFormText?: ReactNode
}

export function LoginForm(props: LoginFormProps) {
    const navigate = useNavigate()

    function inputChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        props.setRequest({...props.request, [name] : value})
    }
    function onSubmitHandler() {
        axios.post(`http://localhost:8080/handlers/auth/${props.url}.php`, props.request)
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
            {Object.entries(props.request).map(([key, val]) =>
                <Input name={key} onChange={inputChangeHandler} errors={props.errors[key]} key={key}/>
            )}
            {props.switchFormText && <p className="flex-1 flex justify-center items-center text-xl font-light p-2 bg-slate-400">
                {props.switchFormText}
            </p>}
        </form>
    )
}