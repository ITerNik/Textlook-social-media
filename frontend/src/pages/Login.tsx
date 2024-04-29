import {LoginForm} from "../widgets/LoginForm.tsx";
import {NavLink} from "react-router-dom";

export function Login() {
    return (
        <div className="bg-slate-200 flex flex-col h-screen w-full items-center justify-center">
            <LoginForm title="Войти" switchFormText={<span>Нет аккаунта? <NavLink to="/register" className="font-bold">Зарегистрируйся</NavLink></span>}
            requestTemplate={{username: 'Логин', password: 'Пароль'}} url="login"/>
        </div>
    )
}