import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  size = 1;
  color = "#121fd9"
  dividerWithText = false;
  dividerText="test";
  dividerAlignText="center";
  textColor="#000000"


  onChangeSize(e:any){
    this.size = e.target.value;
  }
  onChangeColor(e:any){
    this.color = e.target.value;
  }

  toggleText(){
    this.dividerWithText = !this.dividerWithText;
  }

  onChangeText(value:any){
    this.dividerText = value;
  }
  onChangeAlignText(e:any){
    this.dividerAlignText = e.target.value;
  }
  onChangeTextColor(e:any){
    this.textColor = e.target.value;
  }

}
