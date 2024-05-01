export interface AuthorTagProps {
    username: string,
    img: string,
    date: string
}

export function AuthorTag({username, img, date}: AuthorTagProps) {
    function simplifyDate(date: Date) {
        if (new Date().getDate() == date.getDate()) {
            return date.toLocaleString('default', {hour: 'numeric', minute: 'numeric'})
        } else {
            return date.toLocaleString('default', {day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'})
        }
    }

    return (
        <div className="flex justify-start gap-x-6 items-center">
            <img src={img} className="w-12 h-12 rounded-full bg-slate-300"/>
            <div>
                <p className="font-bold text-slate-600">{username}</p>
                <p className="text-[14px]   text-slate-500">{simplifyDate(new Date(date))}</p>
            </div>
        </div>
    )
}