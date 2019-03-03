import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LatestnewsService } from 'src/app/services/latestnews.service';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
  styleUrls: ['./newsdetail.page.scss'],
})
export class NewsdetailPage implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private newsService: LatestnewsService ) { }

  private newsDetail: INewsDetailData;  
  private title: string;

  ngOnInit() {
    this.newsDetail = this.activatedRoute.snapshot.data.detailData;
    console.log(this.newsDetail)
    console.log(this.newsDetail.coverImageUrl)
  }
}
