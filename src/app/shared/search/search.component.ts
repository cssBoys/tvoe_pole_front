import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '../../components/modal/modal.service';
import {FieldService} from '../../services/field.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  modal = false;
  fields: any = []
  images
  pSub: Subscription

  constructor(private router: Router, private route: ActivatedRoute, private modalService: ModalService, private fieldsService: FieldService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params["payment"]) {
        this.modal = true;
      }
    });
    this.getDataFromPlaygrounds();
  }

  addField() {
    this.router.navigate(['/add']);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getDataFromPlaygrounds() {
    this.pSub = this.fieldsService.byCategory().subscribe(res => {
      this.fields = res
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
