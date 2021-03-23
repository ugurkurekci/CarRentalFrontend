import { Component, OnInit } from '@angular/core';
import { Colors} from 'src/app/Modules/colors';
import { ColorsService } from 'src/app/services/color.service';
import {colorsResponseModel} from 'src/app/Modules/colorsResponseModel';  

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})

export class ColorsComponent implements OnInit {

  colorget:Colors[]=[];
  dataLoaded=false;

  constructor(private colorService:ColorsService) { }

  ngOnInit(): void {
    this.getColor();
  }
  getColor(){
    this.colorService.getColor().subscribe(response=>{
      this.colorget=response.data  
      this.dataLoaded=true;
    })
    }
  }
