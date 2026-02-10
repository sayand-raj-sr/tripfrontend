import { Component, Inject, OnInit } from '@angular/core';
import { Apiservice } from '../../service/apiservice';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tripmodel } from '../../model/trip';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add implements OnInit{
  addformdata:FormGroup;
  title='add trip';
  tripdata: tripmodel | null = null;  constructor(private api:Apiservice,private builder:FormBuilder,private dialogRef:MatDialogRef<Add> ,
    @Inject(MAT_DIALOG_DATA) public data:tripmodel|null
  ){
    this.addformdata=this.builder.group({
      destination_name:['',[Validators.required]],
      description:['',[Validators.required]],
      image_url:['',[Validators.required]],
      district:['',[Validators.required]],
      state:['',[Validators.required]],
      location:['',[Validators.required]],
      date:['',[Validators.required]],
      time:['',[Validators.required]],
  })
  }
  ngOnInit(): void {
  if (this.data && this.data.id) {
    this.title = 'Edit My Trip';
    this.tripdata = this.data;
    this.addformdata.patchValue(this.data);
  }
}
  close(){
    this.dialogRef.close()
  }
save() {
  if (this.addformdata.valid) {

    const _data: Omit<tripmodel, 'id'> = {
      destination_name: this.addformdata.value.destination_name,
      date: this.addformdata.value.date,
      time: this.addformdata.value.time,
      location: this.addformdata.value.location,
      state: this.addformdata.value.state,
      district: this.addformdata.value.district,
      description: this.addformdata.value.description,
      image_url: this.addformdata.value.image_url
    };

    if (this.tripdata?.id) {
      this.api.updatedataAPI(this.tripdata.id, _data).subscribe({
        next: () => {
          alert('Trip updated');
          this.dialogRef.close();
        },
        error: err => console.log(err)
      });

    } else {
      this.api.adddataAPI(_data).subscribe({
        next: () => {
          alert('Trip saved');
          this.dialogRef.close();
        },
        error: err => console.log(err)
      });
    }
  }
}

  
}
