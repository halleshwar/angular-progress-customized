import {Component} from '@angular/core';

/**
 * @title Determinate progress-bar
 */
@Component({
  selector: 'progress-bar-determinate-example',
  templateUrl: 'progress-bar-determinate-example.html',
  styleUrls:['progress-bar.scss']
})
export class ProgressBarDeterminateExample {
  progressValue:number=3;
  totalValue:number=15;
percentagevalue: number;

  updateValue(){
    this.percentagevalue=(this.progressValue * 100)/this.totalValue;
    console.log(this.percentagevalue)
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */