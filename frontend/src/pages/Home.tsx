import {Feed} from "../widgets/Feed.tsx";
import {PageFrame} from "../widgets/PageFrame.tsx";
import {PublishWindow} from "../features/PublishWindow.tsx";

export function Home() {
    return (
        <PageFrame className="p-4 flex flex-col gap-4">
            <PublishWindow />
            <Feed />
        </PageFrame>
    )
}

