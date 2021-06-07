import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../photos.service';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css'],
})
export class PhotosHomeComponent implements OnInit {
  photoUrl = '';
  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  handleClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.fetchPhotos().subscribe((res) => {
      this.photoUrl = res.urls.regular;
    });
  }
}
