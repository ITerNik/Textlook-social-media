import {ReactNode, useEffect} from "react";
import {Header} from "./Header.tsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function PageFrame({children, className = ''}: {children: ReactNode, className?: string}) {
    const navigate = useNavigate()
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        axios.get('http://localhost:8080/handlers/auth/auth-check.php', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {sessionStorage.setItem('username', res.data.username)})
            .catch(() => navigate("/login"))
    }, [])
    return (
        <div className="grid grid-cols-[80px_1fr_100px] grid-rows-[13vh_87vh] bg-slate-200">
            <Header className="col-span-3"/>
            <div className={`scroll-hidden col-start-2 overflow-y-scroll ${className}`}>
                {children}
            </div>
            <div className="w-full h-full bg-white col-start-1 row-start-2"/>
            <div className="w-full h-full bg-white col-start-3 row-start-2"/>
        </div>
    )
}