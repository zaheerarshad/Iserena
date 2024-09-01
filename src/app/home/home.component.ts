import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  commentForm:any;
  productList:any;
  id:any;
  productname: any;
  productdescription: any;
  postcommentList:any = [];

  constructor(private http:HttpClient, private route:Router, private apiService: ApiService
    ,private formBuilder: FormBuilder,private toastr: ToastrService)
     { 
      this.initForm();
     }

     customOptions: any = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
  
  ngOnInit(): void {

    this.apiService.GetProductItemList().subscribe((res:any )=> {
      console.log("Product Data" , res);
      this.productList= res;
     
  },
  (error:any )=> {
    this.toastr.error("Something wrong...", 'Error!');
    //this.spinner.hide();
  });

  }

  initForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['']
      
    });
  }
  get f1() { return this.commentForm.controls; }

  SaveComment() {
    
    if (this.commentForm.valid) {
      let formObj: any = {
        ProductId: this.id,
        Comment: this.f1.comment.value
      };
      this.apiService.AddComment(formObj).subscribe((res: any) => {
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

  openPopupView(id: any) {
    this.id = id;
    this.apiService.GetProductItemId(id).subscribe((res: any) => {
      console.log('get by id->', res);

        this.productname = res.productName;
        this.productdescription = res.productDescription;  
      
    });

    this.apiService.GetPostCommentList(id).subscribe((res: any) => {
      console.log('Comment by id->', res);

        this.postcommentList = res; 
      
    });
  }

  
    
  }

