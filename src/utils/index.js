export const convertHtmlToString = (html) => {
    let str = html.toString()
    return str.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '').replace(/(\r\n|\n|\r)/gm, "");
}

export const socialLinks = {
    instagram: "https://instagram.com/abudhabi_tamm/",
    twitter: "https://twitter.com/Abudhabi_tamm"
}

export const ScrollToTop = () => {
    window.scrollTo(0, 0)
}

export const shareOptions = [
    {
        title: "facebook",
        format: "facebook",
        downloadURL: "...."
    },
    {
        title: "linkedin",
        format: "linkedin",
        downloadURL: "...."
    },
    {
        title: "twitter",
        format: "twitter",
        downloadURL: "...."
    }]
