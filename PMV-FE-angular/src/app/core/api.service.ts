import { HttpHeaders, HttpContext, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Options {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {
  }

  public get(url: string, param?: any, options?: Options): Observable<any> {
    return this.http.get<any>(this.changBaseUrl(url), { ...options, params: { ...param } });
  }

  public post(url: string, data?: any, options?: Options): Observable<any> {
    return this.http.post<any>(this.changBaseUrl(url), data, options);
  }

  public put(url: string, data: any, param?: any, options?: Options) {
    return this.http.put<any>(this.changBaseUrl(url), data, { ...options, params: { ...param } });
  }

  public patch(url: string, data: any, param?: any, options?: Options) {
    return this.http.patch<any>(this.changBaseUrl(url), data, { ...options, params: { ...param } });
  }

  public delete(url: string, options?: Options) {
    return this.http.delete<any>(this.changBaseUrl(url), options);
  }

  public download(url: string) {
    return window.open(this.changBaseUrl(url), '_blank');
  }

  public viewUrl(url: string) {
    return this.changBaseUrl(url);
  }

  changBaseUrl = (url: string): any => {
    return this.baseUrl + url;
  }
}