export function SearchTile() {
    return (
        <div className="flex relative w-full">
            <input type="text" className="w-full text-slate-300 font-light p-4 pr-20 text-xl bg-slate-500"
            placeholder="Search here" id="search"/>
            <label className="p-6 absolute h-full right-0 flex cursor-text" htmlFor="search">
                <img src="/src/shared/assets/icons/search.png" alt="search-icon"/>
            </label>
        </div>
    )
}