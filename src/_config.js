export const process = {
  dev: false,
}

export const site = {
  home: process.dev ? 'http://localhost:8080/' : "http://bebra.com"
}
export const title = {
  title: "Clash of Clans"
}
export const links = [
  {
    title: "Home",
    alias: "Home",
    url: "/"
  },
  {
    title: "About",
    alias: "About",
    url: "/about"
  },
  {
    title: "Vacancy",
    alias: "Vacancy",
    url: "/vacancy"
  }
]