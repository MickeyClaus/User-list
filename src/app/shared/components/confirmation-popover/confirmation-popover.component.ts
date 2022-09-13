import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-confirmation-popover',
  templateUrl: './confirmation-popover.component.html',
  styleUrls: ['./confirmation-popover.component.scss']
})
export class ConfirmationPopoverComponent implements OnInit {
  @Input() text: string;
  @Output() onConfirm: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  confirm(): void {
    this.onConfirm.emit(true);
  }
}
