import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  form: FormGroup;
  constructor(public fb: FormBuilder,private http: HttpClient)
  {
    this.form = this.fb.group({
      file: [''],
      duration: [null],
    });
  //   let a=this.http.get(
  //     "http://127.0.0.1:5000/summa"
  //   ).subscribe(
  //     data =>{
  //       console.log(
  //         data
  //       )
  //     }
  //   )
  //  console.log(a)
  this.upload().subscribe(data=>{
    console.log(data)
  })
  console.log(this.upload())
  
  }
  upload():Observable<any>{
    let a=this.http.get(
      "http://127.0.0.1:5000/summa"
    )
   console.log(a)
   return a
  }
  submitForm(){
  var formData: any = new FormData();
    formData.append('file', this.form.get('file')!.value);
    formData.append('duration', this.form.get('duration')!.value);
    this.http
      .post('http://127.0.0.1:5000/upload', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

}
}