import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {DOCUMENT} from '@angular/common';
import {ModalService} from '../modal/modal.service';
import {UserInfo} from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  amount = false;

  constructor(private auth: AuthService, @Inject(DOCUMENT) private document: Document, private modalService: ModalService) { }

  ngOnInit() {
    this.amount = JSON.parse(this.auth.getItem('amount'))
    console.log(this.amount);
    this.auth.getUserInfo().subscribe((data: UserInfo) => {
      let name = data.name
      this.auth.setItem('name', JSON.stringify(name));
      console.log(data);
    })
  }

  toBook() {
    const data = {
      amount: '2000'
    }
    this.auth.getServerList(data).subscribe((res: {amount, payment_url}) => {
      let url = res.payment_url
      this.document.location.href = url
    })
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
