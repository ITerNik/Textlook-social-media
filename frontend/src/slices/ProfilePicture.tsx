import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {TipButton} from "./TipButton.tsx";

export function ProfilePicture() {
    const [picture, setPicture] = useState('')
    useEffect(() => {
        setPicture(sessionStorage.getItem('username') ?? 'Anonimous')
    }, []);

    return(
        <NavLink to="/profile">
            <TipButton tip="Профиль">
                <div className="flex h-[70%] rounded-full self-center bg-slate-300">
                        <img src={`/images/${picture || 'Anonimous'}.png`} alt="profile-picture"/>
                </div>
            </TipButton>
        </NavLink>

    )
}