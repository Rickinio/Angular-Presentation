import { Component, OnInit } from '@angular/core';
import { IDisc } from '../shared/disc';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../shared/dataService';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-disc',
  templateUrl: './edit-disc.component.html',
  styleUrls: ['./edit-disc.component.css']
})
export class EditDiscComponent implements OnInit {
  public disc:IDisc;
  public errorMessage:string;
  private sub:Subscription;
  constructor(private route:ActivatedRoute,private dataService:DataService,private router:Router) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params=>{
        let id = +params["id"];
        this.getDisc(id);
      })
  }

  public getDisc(id:number){
    this.dataService.getDisc(id).subscribe(
      disc => this.disc = disc,
      err => this.errorMessage = err
    )
  }

  public saveForm(discForm:NgForm){
    let disc = Object.assign({},this.disc,discForm.value);
    this.dataService.saveDisc(disc).subscribe(
      () => this.router.navigate(["/shop"]),
      err => this.errorMessage = err
    );
  }

}
