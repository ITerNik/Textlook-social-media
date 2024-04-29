import {LoginForm} from "../widgets/LoginForm.tsx";
import {NavLink} from "react-router-dom";

export function Register() {
    return (
        <div className="bg-slate-200 flex flex-col h-screen w-full items-center justify-center">
            <LoginForm inputs={[{placeholder: 'Имя', name: 'name'},
                {placeholder: 'Фамилия', name: 'surname'},
                {placeholder: 'Отображаемое имя', name: 'login'},
                {placeholder: 'Пароль', name: 'password'},
                {placeholder: 'Повторите пароль', name: 'repeated_password'}]}
                       title="Зарегистрироваться" switchFormText={<span>Уже есть аккаунт? <NavLink to="/login" className="font-bold">Войти</NavLink></span>}/>
        </div>
    )
}