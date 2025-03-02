import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';
import { AlbumClass } from '../album-class';
import {RouterModule} from '@angular/router';
import {AlbumsService} from '../albums.service';
import { ActivatedRoute } from '@angular/router'
import { CommonModule } from '@angular/common';; 

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  @Input() albumClass!: AlbumClass;
  albums!: AlbumClass[];
  loaded: boolean = false;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
  }
  ngOnInit() {
    this.loaded = false
    this.albumService.getAlbums().subscribe((albums: AlbumClass[])=>{
      this.loaded = true
      this.albums = albums
    })
    if (localStorage.getItem('albumUpdated')) {
      localStorage.removeItem('albumUpdated'); 
      this.loadAlbums(); 
    }

  }
  deleteAlbum(id: number ){
    if(confirm("You sure you want to delete this albums")){
      this.albumService.deleteAlbum(id).subscribe(()=>{
        this.albums = this.albums.filter(album=>album.id!==id)
        alert("Deleted successfully")
      })
    }
  }
  loadAlbums() {
    this.albumService.getAlbums().subscribe((albums: AlbumClass[]) => {
      this.albums = albums;
      localStorage.setItem('albums', JSON.stringify(albums));
    });
  }
  
}

