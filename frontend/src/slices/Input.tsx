import {ChangeEvent} from "react";

interface InputProps {
    name: string,
    placeholder?: string,
    className?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({className, name, placeholder, onChange} : InputProps) {
    return (
        <input type="text" className={`w-full text-slate-400 border-t-2 border-slate-200 p-4 flex-1 text-center ${className}`}
        placeholder={placeholder} onChange={onChange} name={name}/>
    )
}