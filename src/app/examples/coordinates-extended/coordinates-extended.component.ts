import { Component } from '@angular/core';
import {GeocodingService} from "../../services/geocoding.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {forkJoin, Subscription} from "rxjs";

interface Coordinates {
  longitude: number;
  latitude: number;
}

interface Route {
  coordinatesA: Coordinates;
  coordinatesB: Coordinates;
  distance: number;
}


@Component({
  selector: 'app-coordinates-extended',
  templateUrl: './coordinates-extended.component.html',
  styleUrls: ['./coordinates-extended.component.css']
})
export class CoordinatesExtendedComponent {
  private locationsSub!: Subscription;


  constructor(private geocodingService: GeocodingService,private _snackBar: MatSnackBar) {}
  route: Route = {
    coordinatesA: {latitude: 0, longitude: 0},
    coordinatesB: {latitude: 0, longitude: 0},
    distance: 0
  };

  locationA:string = "";
  locationB:string = "";

  ngOnInit(){
    (window as any).pyscript.interpreter.interpreter.registerJsModule("CoordinatesExtendedComponent", this);
  }


  callPyScript(){
    this.locationsSub = forkJoin([
      this.geocodingService.getCoordinates(this.locationA),
      this.geocodingService.getCoordinates(this.locationB)
      ]
    )
      .subscribe(([coordsA,coordsB])=>{
        console.log(coordsA);
        console.log(coordsB);

        this.route.coordinatesA.latitude = coordsA.results[0].geometry.lat;
        this.route.coordinatesA.longitude = coordsA.results[0].geometry.lng;
        this.route.coordinatesB.latitude = coordsB.results[0].geometry.lat;
        this.route.coordinatesB.longitude = coordsB.results[0].geometry.lng;
        (window as any).pyscript.interpreter.globals.get('mainMap')(this.route);
      });
  }

  mapIsDisplayed(){
    this._snackBar.open("Berechnung abgeschlossen!", "OK!", {
      duration: 10000,
      verticalPosition: "bottom",
      horizontalPosition: 'end',
    });
  }

  ngOnDestroy() {
    (window as any).pyscript.interpreter.interpreter.unregisterJsModule("CoordinatesExtendedComponent");
    (window as any).pyscript.interpreter.globals.get('onDestroy')();
    if (this.locationsSub) {
      this.locationsSub.unsubscribe();
    }
  }
}
