import CodewarsIcon from "../images/social/codewars_icon.svg";
import GithubIcon from "../images/social/github-icon.svg";
import YouTubeIcon from "../images/social/youtube-icon.svg";
import LinkedInIcon from "../images/social/linkedin-icon.svg";
import HackTheBoxIcon from "../images/social/cube.svg";
import Image from "next/future/image";

export function Social() {
  return (
    <>
      <div className={"mx-auto flex justify-center"}>
        <a
          className={"mx-3 my-auto"}
          href={"https://www.codewars.com/users/PatentLobster"}
        >
          <Image
            src={CodewarsIcon}
            alt={"Codewars"}
            className={"my-auto w-8 dark:invert"}
          />
        </a>
        <a className={"mx-3 my-auto"} href={"https://github.com/PatentLobster"}>
          <Image
            src={GithubIcon}
            alt={"Github"}
            className={"my-auto w-8 dark:invert"}
          />
        </a>
        <a
          className={"mx-3 my-auto"}
          href={"https://www.hackthebox.eu/home/users/profile/127846"}
        >
          <Image
            src={HackTheBoxIcon}
            alt={"hackTheBox"}
            className={"my-auto w-8 dark:invert"}
          />
        </a>
        <a
          className={"mx-3 my-auto"}
          href={"https://www.linkedin.com/in/itzikmusli/"}
        >
          <Image
            src={LinkedInIcon}
            alt={"LinkedIn"}
            className={"my-auto w-8"}
          />
        </a>
        <a className={"mx-3 my-auto"} href={"https://youtube.com/@kwad-io"}>
          <Image src={YouTubeIcon} alt={"YouTube"} className={"my-auto w-8"} />
        </a>
      </div>
    </>
  );
}
