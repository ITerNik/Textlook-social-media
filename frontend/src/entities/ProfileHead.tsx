import {TipButton} from "../slices/TipButton.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

interface User {
    name: string,
    surname: string
}

export function ProfileHead() {
    const [picture, setPicture] = useState('')
    const [user, setUser] = useState<User>({name: '', surname: ''})
    const username = sessionStorage.getItem('username')
    useEffect(() => {
        axios.get(`http://localhost:8080/handlers/user/get_user_info.php?username=${username}`)
            .then(res => setUser(res.data))
            .catch(err => alert(err.message))
        setPicture(sessionStorage.getItem('username') ?? 'Anonimous')
    }, []);

    return (
        <div
            className="relative w-full flex flex-col bg-white min-h-[400px] border-[1px] border-slate-300 rounded-md overflow-hidden">
            <img src="/images/default-header-background.jpg" alt="header-background-image"
                 className="h-[70%] object-cover w-full"/>
            <img src={`/images/${picture || 'Anonimous'}.png`} alt="profile-image"
                 className="bg-slate-200 absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full border-[6px] border-white w-36 h-36"/>
            <div className="rounded-full bg-orange-600 absolute bottom-24 right-10 -translate-x-1/2
                 w-14 h-14">
                <TipButton tip="Редактировать профиль">
                    <img src="src/shared/assets/icons/setting.png" alt="settings"
                         className="p-4"/>
                </TipButton>
            </div>
            <div className="rounded-full bg-purple-600 absolute bottom-24 right-32 -translate-x-1/2
                 w-14 h-14">
                <TipButton tip="Подробнее">
                    <img src="src/shared/assets/icons/information.png" alt="settings"
                         className="p-4"/>
                </TipButton>
            </div>
            <div className="flex flex-1 w-full flex-col items-center">
                <p className="text-2xl pt-10 font-bold text-slate-600">{`${user.name} ${user.surname}`}</p>
                <p className=" text-slate-500">{username}</p>
            </div>
        </div>
    )
}