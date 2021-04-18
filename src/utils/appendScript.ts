export function appendScript(url: string) {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
};