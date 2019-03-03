import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { LatestnewsService } from 'src/app/services/latestnews.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  results: Observable<any>;
  
  constructor( private navCtrl: NavController,  private newsService: LatestnewsService ) { }

  ngOnInit() {
    this.results = this.newsService.getLatestNews();
  } 

  onNewsDetail(id: string){
    this.navCtrl.navigateForward(['/', 'tabs', 'news', id])
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.results = this.newsService.getLatestNews();
    this.results.subscribe( data => {
      console.log('Async operation has ended');
      event.target.complete();
    });

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   event.target.complete();
    // }, 2000);
  }
}
