import {Input} from "../slices/Input.tsx";
import {ReactNode} from "react";

interface InputProps {
    placeholder: string,
    name: string
}

interface LoginFormProps {
    inputs: InputProps[]
    title: string,
    switchFormText?: ReactNode
}

export function LoginForm({inputs, title, switchFormText}: LoginFormProps) {
    return (
        <div className="text-white text-3xl min-h-[60%] flex flex-col w-[50%] rounded-md overflow-hidden bg-white">
            <h2 className="text-3xl flex-1 flex items-center justify-center p-6 bg-amber-600 font-bold">{title}</h2>
            {inputs.map(input => <Input placeholder={input.placeholder} key={input.name}/>)}
            {switchFormText && <p className="flex-1 flex justify-center items-center text-xl font-light p-2 bg-slate-400">{switchFormText}</p>}
        </div>
    )
}