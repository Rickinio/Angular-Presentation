import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { ActivatedRoute, Router } from '@angular/router';
import { IDisc } from '../shared/disc';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-disc-details',
  templateUrl: './disc-details.component.html',
  styleUrls: ['./disc-details.component.css']
})
export class DiscDetailsComponent implements OnInit {
  private disc:IDisc;
  private sub: Subscription;
  private error:string;

  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      p => {
        let id = +p["id"];
        this.getDisc(id)
      }
    )
  }

  public getDisc(id:number){
    this.dataService.getDisc(id).subscribe(
      disc => this.disc = disc,
      error => this.error = error
    )
  }

  public saveDisc(discForm:NgForm){
    let disc = Object.assign({},this.disc,discForm.value);
    
    this.dataService.saveDisc(disc).subscribe(
      disc => this.router.navigate(['/shop']),
      error => this.error = error
    );
  }
}
