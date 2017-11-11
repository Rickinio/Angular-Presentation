import { Component, OnInit } from '@angular/core';
import { IDisc } from '../shared/disc';
import { DataService } from '../shared/dataService';
import { IUser } from '../shared/user';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.css']
})
export class DiscsComponent implements OnInit {
  public discs: IDisc[]
  public selectedDisc: IDisc;
  public errorMessage:string;
  public users:IUser[];
  public filter:string;
  constructor(private dataService:DataService) { }

  public setSelectedDisc(disc: IDisc) {
    this.selectedDisc = disc;
  }

  ngOnInit() {
    this.dataService.getDiscs().subscribe(
      discs => this.discs= discs,
      err => this.errorMessage = err
    )

    

    this.dataService.getNamesFromApi(this.ExtractData).subscribe(
      users => this.users = users,
      err => console.log(err)
    )
  }

  public ExtractData(response:Response){
    let resp = response.json();
    return resp;
}

  public addToCart(disc:IDisc){
    this.dataService.addOrderItem(disc);
  }

  public sendPost(){
    this.dataService.saveNewPost().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

}
