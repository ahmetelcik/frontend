import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  constructor() {

  }

  public status: {isopen: boolean} = {isopen: true};

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit() {

  }

}
