import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService} from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title = 'Title'
  // @Output() close = new EventEmitter<void>()
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    const modal = this;

    const self = this;
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 'modal') {

        if (self.id !== 'sms'
        ) {
          modal.close();
        }
      }
    });
    this.modalService.add(this);
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

// close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}

