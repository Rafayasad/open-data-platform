export const convertHtmlToString = (html) => {
    let str = html.toString()
    return str.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '').replace(/(\r\n|\n|\r)/gm, "");
}