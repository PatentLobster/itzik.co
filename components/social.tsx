import {Icons} from "@/components/icons";
import Link from "next/link";

export function Social() {
    return (
        <>
            <Link href={"https://github.com/PatentLobster"}>
                <Icons.gitHub   className={"w-6 inline"} />
            </Link>
            <Link href={"https://www.hackthebox.eu/home/users/profile/127846"}>
                <Icons.box className={"w-8 inline"} />
            </Link>
            <Link href={"https://www.youtube.com/@kwad-io"}>
                <Icons.youTube  className={"w-8 inline"} />
            </Link>
            <Link href={"https://www.facebook.com/itzik.musli"}>
                <Icons.facebook className={"w-8 inline"} />
            </Link>
            <Link href={"https://www.linkedin.com/in/itzikmusli/"}>
                <Icons.linkedin className={"w-8 inline"} />
            </Link>
            <Link href={"https://www.codewars.com/users/PatentLobster"}>
                <Icons.codeWars className={"w-8 inline"} />
            </Link>
        </>
    )
}