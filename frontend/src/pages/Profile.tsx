import {PageFrame} from "../widgets/PageFrame.tsx";
import {ProfileHead} from "../entities/ProfileHead.tsx";

export function Profile() {
    return (
        <PageFrame className="p-4">
            <ProfileHead />
        </PageFrame>
    )
}