import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  constructor() {
  }

  ngOnInit(): void {
  }

  onLike = () => {
    this.loveIts += 1;
  }
  onDislike = () => {
    this.loveIts -= 1;
  }

}
