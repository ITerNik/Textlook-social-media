import {INavigationContent} from "../types/navigationTypes.ts";

export const NAVIGATION_CONTENT_VALUES: INavigationContent[] = [
    {
        title: 'Лента новостей',
        icon: '/src/shared/assets/icons/feed.png',
        link: '/',
        onClick: () => {}
    },
    {
        title: 'Сменить аккаунт',
        icon: '/src/shared/assets/icons/logout.png',
        link: '/login',
        onClick: () => {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
        }}
]

