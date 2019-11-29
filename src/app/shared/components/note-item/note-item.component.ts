import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Note} from '@primetec/primetec-angular';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {

  @Input() item: Note = null;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }


  /**
   * showList
   */
  public showList = () => {
    this.router.navigate(['/home-page/notes']);
  }

}
