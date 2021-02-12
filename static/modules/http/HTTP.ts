type Options = {
    method?: string,
    headers?: object,
    data?: object,
    timeout?: number
};

export class HTTP {
    host = 'https://ya-praktikum.tech/';

    METHODS = {
        GET: 'GET',
        PUT: 'PUT',
        POST: 'POST',
        DELETE: 'DELETE'
    };

    constructor(urlPrefix) {
        this.host = `${this.host}${urlPrefix}`
    }

    get = (url: string, options: Options = {}) => {
        if (typeof options.data === "object") {
            url = url + this.queryStringify(options.data);
        }
        return this.request(url, {...options, method: this.METHODS.GET}, options.timeout);
    };

    put = (url: string, options: Options = {}) => {
        return this.request(url, {...options, method: this.METHODS.PUT}, options.timeout);
    };

    post = (url: string, options: Options = {}) => {
        return this.request(url, {...options, method: this.METHODS.POST}, options.timeout);
    };

    delete = (url: string, options: Options = {}) => {
        return this.request(url, {...options, method: this.METHODS.DELETE}, options.timeout);
    };

    queryStringify(data: object) {
        return "?" + Object.keys(data).map(key => key + '=' + data[key]).join('&');
    }

    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url: string, options: Options, timeout: number = 5000) => {
        const {method, headers, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, `${this.host}${url}`, true);

            if (typeof headers === "object") {
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }

            xhr.timeout = timeout;
            xhr.withCredentials = true;

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === this.METHODS.GET || !data) {
                xhr.send();
            } else if (headers && headers["Content-Type"] === "application/json") {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send(<FormData>data);
            }
        });
    };
}