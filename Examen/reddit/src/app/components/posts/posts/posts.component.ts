import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts', templateUrl: './posts.component.html', styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() numVotes = 0

  @Input() subrPhoto = "favicon.ico"

  @Input() subrName = "null"

  @Input() postData = "null"

  @Input() postImage = "null"

  @Input() numComments = 0

  @Input() postTitle = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}
