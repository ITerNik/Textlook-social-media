import {Header} from "../widgets/Header.tsx";
import {Feed} from "../widgets/Feed.tsx";

export function Home() {
    return (
        <div className="grid grid-cols-[80px_1fr_100px] grid-rows-[80px_1fr] ">
            <Header className="col-span-3"/>
            <Feed className="col-start-2"/>
        </div>
    )
}

