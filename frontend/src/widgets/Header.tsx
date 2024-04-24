import {NAVIGATION_CONTENT_VALUES} from "../shared/constants/navigationContentValues.ts";
import {NavLink} from "react-router-dom";

export function Header() {
    const navigationContent = NAVIGATION_CONTENT_VALUES.map(value => (
            <li key={value.title}>
                <NavLink to={value.link}>
                    {value.title}
                </NavLink>
            </li>
        )
    )

    return (
        <ul>
            {navigationContent}
        </ul>
    )
}