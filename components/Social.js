import CodewarsIcon from "../images/social/codewars_icon.svg";
import GithubIcon from "../images/social/github-icon.svg";
import YouTubeIcon from "../images/social/youtube-icon.svg";
import LinkedInIcon from "../images/social/linkedin-icon.svg";
import HackTheBoxIcon from "../images/social/cube.svg";
import Image from "next/future/image";
import clsx from "clsx";
export function Social({ imgClass, className }) {
  return (
    <>
      <div className={clsx("mx-auto my-auto flex justify-center", className)}>
        <a
          className={"my-auto"}
          href={"https://www.codewars.com/users/PatentLobster"}
        >
          <Image
            src={CodewarsIcon}
            alt={"Codewars"}
            className={clsx(
              "my-auto aspect-auto dark:invert",
              imgClass ?? "w-8"
            )}
          />
        </a>
        <a className={" my-auto"} href={"https://github.com/PatentLobster"}>
          <Image
            src={GithubIcon}
            alt={"Github"}
            className={clsx(
              "my-auto aspect-auto dark:invert",
              imgClass ?? "w-8"
            )}
          />
        </a>
        <a
          className={"my-auto"}
          href={"https://www.hackthebox.eu/home/users/profile/127846"}
        >
          <Image
            src={HackTheBoxIcon}
            alt={"hackTheBox"}
            className={clsx(
              "my-auto aspect-auto dark:invert",
              imgClass ?? "w-8"
            )}
          />
        </a>
        <a
          className={"my-auto"}
          href={"https://www.linkedin.com/in/itzikmusli/"}
        >
          <Image
            src={LinkedInIcon}
            alt={"LinkedIn"}
            className={clsx("my-auto aspect-auto", imgClass ?? "w-8")}
          />
        </a>
        <a className={"my-auto"} href={"https://youtube.com/@kwad-io"}>
          <Image
            src={YouTubeIcon}
            alt={"YouTube"}
            className={clsx("my-auto aspect-auto", imgClass ?? "w-8")}
          />
        </a>
      </div>
    </>
  );
}
