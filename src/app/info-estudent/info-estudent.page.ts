import { Component, OnInit } from '@angular/core';
import {PolicyService} from 'src/app/policy.service';
import {Policy} from 'src/app/policy';
import { from } from 'rxjs';

@Component({
  selector: 'app-info-estudent',
  templateUrl: './info-estudent.page.html',
  styleUrls: ['./info-estudent.page.scss'],
})
export class InfoEstudentPage implements OnInit {

  student:Policy[]

  constructor(private policyService:PolicyService) { }

  ngOnInit() {
    this.policyService.getStudent().subscribe(data =>{
      this.student=data.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }as Policy;
      })
    })
  }

}
