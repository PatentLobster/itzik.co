interface SiteConfig {
  name: string
  description: string
  links: {
      twitter: string,
      facebook: string,
      github: string,
      linkedin: string,
      codewars: string,
      youtube: string,
      hackthebox: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Itzik",
  description:
    "Hey, I'm Itzik, AKA PatentLobster.",
  links: {
      twitter: "https://twitter.com/PatentLobster",
      facebook: "https://www.facebook.com/itzik.musli/",
      github: "https://github.com/PatentLobster",
      linkedin: "https://www.linkedin.com/in/itzikmusli/",
      codewars: "https://www.codewars.com/users/PatentLobster",
      youtube: "https://youtube.com/@kwad-io",
      hackthebox: "https://www.hackthebox.eu/home/users/profile/127846"
  },
}