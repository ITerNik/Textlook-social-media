import {Header} from "../widgets/Header.tsx";
import {Feed} from "../widgets/Feed.tsx";

export function Home() {
    return (
        <div className="grid grid-cols-[80px_1fr_100px] grid-rows-[13vh_1fr] bg-slate-200">
            <Header className="col-span-3"/>
            <Feed className="col-start-2"/>
            <div className="w-full h-full bg-white col-start-1 row-start-2"/>
            <div className="w-full h-full bg-white col-start-3 row-start-2"/>
        </div>
    )
}

