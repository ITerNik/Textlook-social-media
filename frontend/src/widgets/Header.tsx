import {NAVIGATION_CONTENT_VALUES} from "../shared/constants/navigationContentValues.ts";
import {NavLink} from "react-router-dom";
import logo from "../shared/assets/images/logo.png"
import logoText from "../shared/assets/images/fontbolt.png"


export function Header() {
    const navigationContent = NAVIGATION_CONTENT_VALUES.map(value => (
            <li key={value.title} className="p-4">
                <NavLink to={value.link}>
                    {value.title}
                </NavLink>
            </li>
        )
    )

    return (
        <div className="flex justify-between bg-blue-800 text-white px-4 font-bold">
            <div className="flex gap-x-5">
                <img src={logo} className="w-10 h-10 rounded-full self-center" alt="logo"/>
                <img src={logoText} className="h-6 self-center" alt="logo-text"/>
            </div>

            <ul className="flex justify-end">
                {navigationContent}
            </ul>
        </div>

    )
}