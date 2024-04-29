import {NAVIGATION_CONTENT_VALUES} from "../shared/constants/navigationContentValues.ts";
import {LogoCard} from "../slices/LogoCard.tsx";
import {SearchTile} from "../features/SearchTile.tsx";
import {ProfilePicture} from "../slices/ProfilePicture.tsx";
import {TipButton} from "../slices/TipButton.tsx";
import {NavLink} from "react-router-dom";


export function Header({className = ''} : {className?: string}) {
    const navigationContent = NAVIGATION_CONTENT_VALUES.map(value => (
            <li key={value.title.toString()}>
                <TipButton tip={value.title}>
                    <NavLink to={value.link} className="h-[40%] flex self-center" onClick={value.onClick}>
                        <img src={value.icon} alt={value.title.toString()}/>
                    </NavLink>
                </TipButton>
            </li>
        )
    )

    return (
        <div className={`flex justify-between bg-slate-600 h-full items-center text-white font-bold pr-10 ${className}`}>
            <div className="flex w-[35%] h-full">
                <LogoCard />
                <SearchTile />
            </div>

            <img src="src/shared/assets/images/textlogo.png" alt="text-logo"
            className="h-[80%] hidden md:block"/>

            <ul className="flex h-full justify-between w-[30%]">
                {navigationContent}
                <li>
                    <TipButton tip="Профиль">
                        <ProfilePicture/>
                    </TipButton>
                </li>
            </ul>
        </div>
    )
}