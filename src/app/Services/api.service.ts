import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../Settings/app-settings';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  GetProductItemList() {
    return this.httpClient.get(`${AppSettings.ISERENA_API}${AppSettings.GET_PRODUCTITEM}`);
  }
  
  AddProductItem(formObj: any) {
    return this.httpClient.post(`${AppSettings.ISERENA_API}${AppSettings.POST_PRODUCTITEM}`, formObj);
  };
  GetProductItemId(id:any){
    return this.httpClient.get(`${AppSettings.ISERENA_API}${AppSettings.GET_PRODUCTITEMID}/${id}`);
  }
  AddComment(formObj: any) {
    return this.httpClient.post(`${AppSettings.ISERENA_API}${AppSettings.POST_ADDCOMMENT}`, formObj);
  };
  GetPostCommentList(id:any){
    return this.httpClient.get(`${AppSettings.ISERENA_API}${AppSettings.GET_COMMENTLIST}/${id}`);
  }
}
