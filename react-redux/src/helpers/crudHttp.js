export const post = async (url, options) => {
    options.method = "POST";
    options.body = JSON.stringify(options.body);
    options.headers = {"Content-Type": "application/json", accept: "application/json"}

    console.log(options)

    const res = await fetch(url, options);
    const json = await res.json()
    console.log(json)
    return json
}
