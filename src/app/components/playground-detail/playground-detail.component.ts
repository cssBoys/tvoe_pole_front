import {Component, OnInit, ViewChild} from '@angular/core';
import {FieldService} from '../../services/field.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playground-detail',
  templateUrl: './playground-detail.component.html',
  styleUrls: ['./playground-detail.component.scss']
})
export class PlaygroundDetailComponent implements OnInit {
  @ViewChild('titleInput') inputName;
  action = 'contacts';
  text: string;
  // showText
  showRating
  rating
  id
  showReview = false;


  constructor(private field: FieldService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }
  tabHist(action) {
    this.action = action;
  }
  addTodo(title:string) {
    console.log(title);
    this.text = title
    const data = {
      text: this.text,
      playground: 1,
      rating: this.rating
    }
    this.field.sendReview(data).subscribe(() => {
      this.showReview = true
    })
    this.inputName.nativeElement.value = '';
  }

  ratingComponetClick(clickObj: any): void {
    this.showRating = clickObj.rating
    console.log(`The Item ${clickObj.id}
          has been given ${clickObj.rating} stars,
          now is time to update the item with the new rating`);
  }

}
