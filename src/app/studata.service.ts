import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudataService {



  studentData:Array<any>=[
    // {
    //   id:1,
    //   name:"aman",
    //   email:"aman@gmail.com",
    //   marks:65,
    //   result:"pass"
    // },
    // {
    //   id:2,
    //   name:"Babu rao",
    //   email:"BRapte@gmail.com",
    //   marks:75,
    //   result:"pass"
    // },
    // {
    //   id:3,
    //   name:"raju ",
    //   email:"raju@gmail.com",
    //   marks:32,
    //   result:"fail"
    // },
    // {
    //   id:4,
    //   name:"Shyam ",
    //   email:"shyam@gmail.com",
    //   marks:70,
    //   result:"pass"
    // }
  ]

  updateid!:number;

  constructor() { }

  delete(data:number){
    this.studentData.splice(data,1)
  }

  newform:any

  postdata(data:any,form:any){
    this.studentData=data
    this.newform=form

  }

updatenewData(newform:FormGroup){
            this.studentData[this.updateid]=newform.value
}
  updateFormpatch(data:any,i:number): void{
    // this.newform.id= this.studentData[i].id
    this.newform.setValue({id:this.studentData[i].id,name:this.studentData[i].name,email:this.studentData[i].email,marks:this.studentData[i].marks,result:this.studentData[i].result});

    console.log(this.studentData[i].id);
    this.updateid=i

  }



}
