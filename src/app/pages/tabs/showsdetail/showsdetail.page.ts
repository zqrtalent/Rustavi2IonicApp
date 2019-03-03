import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-showsdetail',
  templateUrl: './showsdetail.page.html',
  styleUrls: ['./showsdetail.page.scss'],
})
export class ShowsdetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private showsService: ShowsService) { }

  title: string = ''
  results: any;

  ngOnInit() {
    this.reload();
  }

  reload(completed?: () => void){
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.showsService.getShowDetail(name).subscribe(data => {
      this.results = data;
      this.title = data.name;

      if(completed != null)
        completed();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.reload(() => {
      console.log('Async operation has ended');
      event.target.complete();
    });
  }
}
