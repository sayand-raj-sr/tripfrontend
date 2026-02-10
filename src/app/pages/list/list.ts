import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../service/apiservice';
import { MatDialog } from '@angular/material/dialog';
import { Add } from '../add/add';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  constructor(private api:Apiservice,private dialog:MatDialog){}
  
  tripdata:any=[]
  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
   return this.api.getallAPI().subscribe({
    next:(res)=>{
      this.tripdata=res
      console.log("tripdata fetched",this.tripdata);
      
    },
    error:(err)=>{
      console.log(err);
      
    }

   }
  )}

  add(){
    this.openPopup(0)
  }

  openPopup(id:any){
    this.dialog.open(Add,{
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
      data:{
        id:id
      }
    }).afterClosed().subscribe(result=>{
      this.getdata()
    })

  }

  Edit(id:any){
    this.openPopup(id)

  }
  loadpage(){
    this.api.getallAPI().subscribe(data=>{
      this.tripdata=data
    })
  }
  Delete(id:any){
   if(confirm('Are you Sure?')){
    this.api.deletedataAPI(id).subscribe(()=>{
      alert('trip deleted')
      this.loadpage()
    })
   }
  }
}
