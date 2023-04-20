import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudataService } from '../studata.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  form= new FormGroup({
    id:new FormControl(),
    name: new FormControl(),
    email:new FormControl(),
    marks: new FormControl(),
    result: new FormControl()
  })

  newarr:any;
  postarr:any;
  constructor(private demo:StudataService){





    this.newarr=this.demo.studentData

  }
  // studentid:any
  addData(){
    // this.demo.studentData=this.newarr
    this.newarr.push({id:this.form.value.id,name:this.form.value.name,email:this.form.value.email,marks:this.form.value.marks,result:this.form.value.result})
    // console.log(this.newarr);
    this.postarr=this.newarr
    console.log(this.form.value.id);

    this.demo.postdata(this.newarr,this.form)

  }

  update(){
    this.demo.updatenewData(this.form)
  }
}
