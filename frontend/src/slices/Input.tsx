import {ChangeEvent, useState} from "react";
import {TipButton} from "./TipButton.tsx";
import {VALIDATORS} from "../shared/constants/formValidators.ts";

interface InputProps {
    name: string,
    className?: string,
    password?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const PLACEHOLDERS = new Map<string, string> ([
    ['username', 'Логин'],
    ['name', 'Имя'],
    ['surname', 'Фамилия'],
    ['password', 'Пароль'],
    ['repeated', 'Повторите пароль']
])

const handleRangeConstraint = (value: string): string => {
    return VALIDATORS.notEmpty(value) || VALIDATORS.maxValue(value, 40) || VALIDATORS.minValue(value, 6)
}

const handleMaxConstraint = (value: string): string => {
    return VALIDATORS.notEmpty(value) || VALIDATORS.maxValue(value, 40)
}

const checkRepeatedPassword = (value: string, compared: string) => {
    return value === compared ? '' : 'Пароли не совпадают';
}

export function Input({className, name, password = '', onChange} : InputProps) {
    const [errors, setErrors] = useState('')

    const INPUT_VALIDATORS = new Map<string, (val: string) => string> ([
        ['username', val => handleRangeConstraint(val)],
        ['name', val => handleMaxConstraint(val)],
        ['surname', val => handleMaxConstraint(val)],
        ['password', val => handleRangeConstraint(val)],
        ['repeated', val => checkRepeatedPassword(val, password)]
    ])

    const validate = INPUT_VALIDATORS.get(name)

    return (
        <div className="relative flex-1">
            <input type="text"
                   className={`w-full text-slate-400 border-t-2 border-slate-200 p-4 h-full text-center ${className}`}
                   placeholder={PLACEHOLDERS.get(name)} onChange={(e) => {onChange(e); setErrors(validate(e.target.value))}} name={name}/>
            {errors && <div className="absolute right-5 rounded-full top-1/2 -translate-y-1/2 bg-red-600 h-6 w-6 p-1">
                <TipButton tip={errors}>
                    <img src="src/shared/assets/icons/warning.png" alt="warning-sign"/>
                </TipButton>
            </div>}
        </div>
    )
}