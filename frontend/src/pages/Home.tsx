import {Feed} from "../widgets/Feed.tsx";
import {PageFrame} from "../widgets/PageFrame.tsx";

export function Home() {
    return (
        <PageFrame className="p-4">
            <Feed />
        </PageFrame>
    )
}

