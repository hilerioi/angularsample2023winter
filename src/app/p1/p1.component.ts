import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {

  constructor(private todoListService: TodoserviceService) { }

  results:any;

  ngOnInit(): void {
    this.results = this.todoListService.getInfo();
    this.todoListService.getList().subscribe( (expressServerResult) => 
    {
      this.results = expressServerResult;
    });
  }

}
