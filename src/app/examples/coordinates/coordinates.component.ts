import { Component } from '@angular/core';

interface Coordinates {
  longitude: number;
  latitude: number;
}

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})

export class CoordinatesComponent {
  coordinates: Coordinates = {
    longitude: 0,
    latitude: 0
  };

  ngOnInit(){
    (window as any).pyscript.interpreter.interpreter.registerJsModule("CoordinatesComponent", this);
  }

  callPyScript(){
    (window as any).pyscript.interpreter.globals.get('displayMap')(this.coordinates);
  }

  mapIsDisplayed(){
    alert("Coordinates are displayed on the map!")
  }

  ngOnDestroy() {
    (window as any).pyscript.interpreter.interpreter.unregisterJsModule("CoordinatesComponent");
    (window as any).pyscript.interpreter.globals.get('onDestroy')();
  }
}