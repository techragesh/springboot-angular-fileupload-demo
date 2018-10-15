import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) {}

  uploadFiles(file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const request = new HttpRequest('POST', '/upload', formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(request);
  }

  getFiles(): Observable<any> {
    return this.http.get('/getFiles');
  }
}
