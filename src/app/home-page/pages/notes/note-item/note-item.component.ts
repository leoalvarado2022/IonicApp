import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '@primetec/primetec-angular';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {

  @Output() noteClicked: EventEmitter<Note | null> = new EventEmitter<Note | null>();
  @Output() deleteNote: EventEmitter<Note | null> = new EventEmitter<Note | null>();
  @Input() item: Note = null;
  @Input() slideDisabled = true;

  constructor() {

  }

  ngOnInit() {

  }

  /**
   * getPhotoPath
   */
  public getPhotoPath = () => {
    if (this.item) {
      return 'data:image/jpeg;base64,' + this.item.image;
    }

    return '';
  }

  /**
   * itemClicked
   * @param item
   */
  public itemClicked = (item: Note = null) => {
    this.noteClicked.emit(item);
  }

  /**
   * deleteItem
   * @param item
   */
  public deleteItem = (item: Note) => {
    this.deleteNote.emit(item);
  }

}
