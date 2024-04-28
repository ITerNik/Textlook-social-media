import logoSign from '../shared/assets/images/logo.png'

export function LogoCard() {
    return (
        <div className="bg-orange-600 p-3 min-w-[80px]">
            <img src={logoSign} className="h-full object-contain mx-auto" alt="logo"/>
        </div>
    )
}