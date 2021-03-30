import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/Models/Entities/colors';
import { ColorsService } from 'src/app/services/color-service/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  colors: Colors[] = [];
  dataLoaded = false;
  currentColor: Colors;

  constructor(private colorService: ColorsService) {}

  ngOnInit(): void {
    this.getColor();
  }
  getColor() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentColor(colors: Colors) {
    this.currentColor = colors;
  }

  getcurrentColorClass(colors: Colors) {
    if (colors == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
