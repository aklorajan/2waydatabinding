import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
@Output() serverCreated = new EventEmitter<{serName:string, serContent:string}>();
@Output() blueprintCreated = new EventEmitter<{blpName:string, blpContent:string}>();

  serverName = '';
 serverContent = '';
  onAddServer(){
this.serverCreated.emit({
  serName: this.serverName,
  serContent : this.serverContent
})
  }
  onAddBlueprint(){
this.blueprintCreated.emit({
  blpName: this.serverName,
  blpContent:this.serverContent
})
  }
}
