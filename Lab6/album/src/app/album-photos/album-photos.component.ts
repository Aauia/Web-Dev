import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlbumClass} from '../album-class';
import {PhotosClass} from '../photos-class';
import {AlbumsService} from '../albums.service';
import {CommonModule} from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
  
})
export class AlbumPhotosComponent implements OnInit {
  album!: AlbumClass;
  loaded: boolean;
  albumphotos!: PhotosClass[];


  constructor(private route: ActivatedRoute, private albumsService: AlbumsService, 
    private location: Location) {
    this.loaded = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const albumID = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getPhotosByAlbum(albumID).subscribe((albumPhotos: PhotosClass[]) => {
        this.albumphotos = albumPhotos;
        this.loaded = true;
      });
    
    });
  }
  goBack() {
    this.location.back();
  }
}