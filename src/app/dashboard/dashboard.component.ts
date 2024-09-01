import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productform: FormGroup|any;
  submitted = false;
  id: Guid | undefined;

  constructor(private http:HttpClient, private route:Router, private apiService: ApiService
    ,private formBuilder: FormBuilder,private toastr: ToastrService) 
    { 
      
      this.initForm();
    }

  ngOnInit(): void {
    
  }

  initForm() {
    this.productform = this.formBuilder.group({
      id: [''],
      productname: ['', Validators.required],
      productdiscription: ['', Validators.required]
    });
  }
  get f1() { return this.productform.controls; }

  productAdd(productform: FormGroup)
  {
    console.log(this.productform.value);
    this.http.post<any>("/product", this.productform.value)
    .subscribe(res=>{
      alert("Product Saved Successfully");
      this.productform.reset();
    }, err=>{
      alert("Something went wrong");
    })
  }


  SaveData() {
    this.submitted = true;
    this.id = Guid.create();
    console.log(this.id);
    if (this.productform.valid) {
      let formObj: any = {
        //Id: Guid.create(),
        ProductName: this.f1.productname.value,
        ProductDescription: this.f1.productdiscription.value
      };
      this.apiService.AddProductItem(formObj).subscribe((res: any) => {
        if (res.result == true) {
          console.log("save - ", res)
          this.toastr.success('Data Saved Successfully', 'Saved');
          //this.router.navigate(['dashboard']);  
        }
      },
        (error: any) => {
          this.toastr.error('Data not saved....', 'Error');
        });
    }else{
      return;
    }

}

}
