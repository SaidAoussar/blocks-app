import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blocks-app';
  size = 1;
  color = "#121fd9"
  dividerWithText = false;
  dividerText="test";
  dividerAlignText="center";


  onChangeSize(e:any){
    this.size = e.target.value;
  }
  onChangeColor(e:any){
    this.color = e.target.value;
  }

  toggleText(){
    this.dividerWithText = !this.dividerWithText;
  }

  onChangeText(e:any){
    this.dividerText = e.target.value;
  }
  onChangeAlignText(e:any){
    this.dividerAlignText = e.target.value
  }

}
