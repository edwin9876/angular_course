import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnplashResponse {
  urls: {
    [options: string]: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private unplashUrl = 'https://api.unsplash.com/photos/random';
  private accessKey = '6Umasw--ugrB2mM-hVz8o9OP5TwYke4BZTs43sMceLU';
  constructor(private http: HttpClient) {}

  fetchPhotos() {
    return this.http.get<UnplashResponse>(this.unplashUrl, {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`,
      },
    });
  }
}
