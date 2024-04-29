export function Input({className, placeholder} : {className?: string, placeholder?: string}) {
    return (
        <input type="text" className={`w-full text-slate-400 border-t-2 border-slate-200 p-4 flex-1 text-center ${className}`}
        placeholder={placeholder}/>
    )
}