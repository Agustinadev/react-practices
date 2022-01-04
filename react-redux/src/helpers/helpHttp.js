const helpHttp = () => {
    const customFetch = (endpoint, options) => {
        const controller = new AbortController(); 
        setTimeout(() => {
            controller.abort()
        }, 3000);

        //options
        const defaultHeader = {accept: "application/json"};
        options.headers = options.headers
            ? { ...defaultHeader, ...options.headers }
            : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) {
            delete options.body
        }
        options.signal = controller.signal;

        return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  
        
    }


    const get = (endpoint, options = {}) => {
        options.method = "GET"
        return customFetch(endpoint, options)
    }
    const post = (endpoint, options = {}) => {
        options.method = "POST"
        return customFetch(endpoint, options)
    }
    const put = (endpoint, options = {}) => {
        options.method = "PUT"
        return customFetch(endpoint, options)
    }
    const delet = (endpoint, options = {}) => {
        options.method = "DELETE"
        return customFetch(endpoint, options)
    }

   return {get, post, put, delet};
}

export default helpHttp
