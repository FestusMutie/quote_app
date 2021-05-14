import { Component } from '@angular/core';
import { Goal } from './goal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:Goal[] = [
    {id:1, name:'The way to get started is to quit talking and begin doing.'},
    {id:2,name:'If life were predictable it would cease to be life, and be without flavor.'},
    {id:3,name:'If you set your goals ridiculously high and it is a failure, you will fail above everyone elses success.'},
    {id:4,name:'Life is what happens when you are busy making other plans.'},
    {id:5,name:'Do what you can, with what you have, where you are.'},
    {id:6,name:'Be yourself; everyone else is already taken.'},
    {id:7,name:'If you cannot do great things, do small things in a great way.'},
    {id:8,name:'Strive not to be a success, but rather to be of value.'},
  ];
  
}
