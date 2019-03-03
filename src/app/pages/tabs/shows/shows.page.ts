import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/services/shows.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.page.html',
  styleUrls: ['./shows.page.scss'],
})
export class ShowsPage implements OnInit {

  results: Observable<any>;

  constructor(private navCtrl: NavController, private showsService: ShowsService) { }

  ngOnInit() {
    this.results = this.showsService.getShows();
  }

  onShowDetail(name: string){
    this.navCtrl.navigateForward(['/', 'tabs', 'shows', name])
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.results = this.showsService.getShows();
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
