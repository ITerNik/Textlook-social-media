import {NAVIGATION_CONTENT_VALUES} from "../shared/constants/navigationContentValues.ts";
import {NavLink} from "react-router-dom";
import {LogoCard} from "../slices/LogoCard.tsx";


export function Header({className = ''} : {className?: string}) {
    const navigationContent = NAVIGATION_CONTENT_VALUES.map(value => (
            <li key={value.title} className="p-4">
                <NavLink to={value.link}>
                    {value.title}
                </NavLink>
            </li>
        )
    )

    return (
        <div className={`flex justify-between bg-slate-600 h-full text-white font-bold ${className}`}>
            <div className="flex gap-x-5">
                <LogoCard />
            </div>

            <ul className="flex justify-end">
                {navigationContent}
            </ul>
        </div>

    )
}