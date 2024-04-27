import {useEffect, useState} from "react";

export function ProfilePicture() {
    const [picture, setPicture] = useState('')
    useEffect(() => {
        setPicture(sessionStorage.getItem('profile-picture') ?? '/images/Anonimous.png')
    }, []);

    return(
        <div className="flex h-full rounded-full p-4">
            <img src={picture} alt="profile-picture"/>
        </div>
    )
}