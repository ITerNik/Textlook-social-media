import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {TipButton} from "./TipButton.tsx";

export function ProfilePicture() {
    const [picture, setPicture] = useState('')
    useEffect(() => {
        setPicture(sessionStorage.getItem('profile-picture') ?? '/images/Anonimous.png')
    }, []);

    return(
        <NavLink to="/profile">
            <TipButton tip="Профиль">
                <div className="flex h-full rounded-full p-4">
                        <img src={picture} alt="profile-picture"/>
                </div>
            </TipButton>
        </NavLink>

    )
}