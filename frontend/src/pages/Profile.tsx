import {PageFrame} from "../widgets/PageFrame.tsx";
import {ProfileHead} from "../entities/ProfileHead.tsx";
import {AuthorFeed} from "../widgets/AuthorFeed.tsx";

export function Profile() {
    return (
        <PageFrame className="p-4 flex flex-col gap-6">
            <ProfileHead />
            <AuthorFeed />
        </PageFrame>
    )
}