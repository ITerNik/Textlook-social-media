import logoSign from '../shared/assets/images/logo.png'

export function LogoCard() {
    return (
        <div className="bg-orange-600 min-w-[80px]">
            <img src={logoSign} className="h-full" alt="logo"/>
        </div>
    )
}