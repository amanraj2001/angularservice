import { Component } from '@angular/core';
import { StudataService } from '../studata.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {

  x:any;

      constructor(private demo:StudataService){
        this.x=this.demo.studentData
        console.log(this.x);

      }

      del(i:number){
        // this.upID=this.x[i].id
        this.demo.delete(i)
        // var t1=this.demo.studentData.filter(p=>p.id==this.x[i].id);
        // if(this.demo.studentData.filter(p=>p.id==this.upID)){
        //   console.log(this.demo.studentData);
          // console.log(this.upID);
          // delete this.demo.studentData
          // console.log(this.demo.studentData[this.upID].id);
            // this.demo.studentData=this.demo.studentData.splice(i-1,i)
            // console.log("dg");

          }


          patchdata:any
            patch(i:number){
              this.patchdata=this.demo.studentData.filter(p=>p.id==this.x[i].id)
              console.log(this.demo.studentData.filter(p=>p.id==this.x[i].id));
              this.demo.updateFormpatch(this.patchdata,i)
           
            }

      }



