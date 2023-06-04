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
  dividerWidth = "100";
  dividerWidthUnit = "%";
  dividerPosition = "start";
  textColor="#000000";
  textSize = 14;
  textFontFamily = '"Lucida Console", "Courier New", monospace';

  onChangeSizeValue(value:any){
    if(typeof value == 'number'){
      this.size=value;
    }else{
      this.size = 1;
    }
  }


  onChangeWidth(value:any){
    this.dividerWidth = value;
  }
  onChangeWidthUnit(value:any){
    this.dividerWidthUnit = value;
  }

  onChangePosition(e:any){
    this.dividerPosition = e.target.value;
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

  onChangeTextSize(e:any){
    if(!Number.isNaN(parseFloat(e.target.value))){
      this.textSize = e.target.value;
      console.log("hello from number")
    }else{
      console.log("not number")

      this.textSize = 14;
    }
  }

  onChangeTextFontFamily(e:any){
    this.textFontFamily = e.target.value;
  }
  onChangeAlignText(e:any){
    this.dividerAlignText = e.target.value;
  }
  onChangeTextColor(e:any){
    this.textColor = e.target.value;
  }

}
