import {ReactElement} from "react";

export interface INavigationContent {
    title: ReactElement | string,
    icon: string,
    link: string
    onClick: () => void
}