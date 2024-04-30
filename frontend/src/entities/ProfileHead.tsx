import {TipButton} from "../slices/TipButton.tsx";
import {useEffect, useState} from "react";

export function ProfileHead() {
    const [picture, setPicture] = useState('')
    useEffect(() => {
        setPicture(sessionStorage.getItem('username') ?? 'Anonimous')
    }, []);

    return (
        <div className="relative w-full flex flex-col bg-white min-h-[400px] border-[1px] border-slate-300 rounded-md overflow-hidden">
            <img src="/images/default-header-background.jpg" alt="header-background-image"
                 className="h-[75%] object-cover w-full "/>
            <img src={`/images/${picture || 'Anonimous'}.png`} alt="profile-image"
                 className="bg-slate-200 absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full border-[6px] border-white w-36 h-36"/>
                <div className="rounded-full bg-amber-600 absolute bottom-20 right-10 -translate-x-1/2
                 w-14 h-14">
                    <TipButton tip="Редактировать профиль">
                        <img src="src/shared/assets/icons/setting.png" alt="settings"
                        className="p-4"/>
                    </TipButton>
                </div>
            <div className="flex flex-1 justify-evenly w-full">
                <p className="text-2xl pt-10 font-bold text-slate-600">{picture}</p>
            </div>
        </div>
    )
}