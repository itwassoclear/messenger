import { queryStringify } from "./helpers";

enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface IOptions {
  method: Method;
  data?: any;
  headers?: Record<string, string>;
}

export class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = "/"): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(
    path: string,
    data?: unknown
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.POST,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PUT,
      data,
    });
  }

  public patch<Response = void>(
    path: string,
    data: unknown
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.PATCH,
      data,
    });
  }

  public delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.DELETE,
      data,
    });
  }

  private request<Response>(
    url: string,
    options: IOptions = { method: Method.GET }
  ): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  }

  // private request<Response>(url: string, options: IOptions): Promise<Response> {
  //   const { headers = {}, method, data } = options;
  //   const preparedData = data instanceof FormData ? data : JSON.stringify(data);
  //   const preparedHeaders =
  //     data instanceof FormData ? {} : { "Content-Type": "application/json" };

  //   return new Promise(function (resolve, reject) {
  //     if (!method) {
  //       reject("No method");
  //       return;
  //     }

  //     const xhr = new XMLHttpRequest();
  //     const isGet = method === Method.GET;

  //     xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

  //     Object.keys(preparedHeaders).forEach((key) => {
  //       xhr.setRequestHeader(key, headers[key]);
  //     });

  //     xhr.onload = function () {
  //       resolve(xhr);
  //     };

  //     xhr.onreadystatechange = (e) => {
  //       if (xhr.readyState === XMLHttpRequest.DONE) {
  //         if (xhr.status < 400) {
  //           resolve(xhr.response);
  //         } else {
  //           reject(xhr.response);
  //         }
  //       }
  //     };

  //     xhr.onabort = reject;
  //     xhr.onerror = reject;
  //     xhr.ontimeout = reject;

  //     xhr.withCredentials = true;
  //     xhr.responseType = "json";

  //     if (isGet || !data) {
  //       xhr.send();
  //     } else {
  //       xhr.send(preparedData);
  //     }
  //   });
  // }
}
