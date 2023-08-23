import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component {
  private activatedRoute = inject(ActivatedRoute)
  private title = inject(Title)

  id = ""
  audio!: HTMLAudioElement;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    this.title.setTitle('Upload ' + this.id)
    this.audio = new Audio(`https://vttpcsfbucket.sgp1.digitaloceanspaces.com/${this.id}`);
  }
}
