import { Component } from '@angular/core';

@Component({
  selector: 'app-add-pyscript',
  templateUrl: './add-pyscript.component.html',
  styleUrls: ['./add-pyscript.component.css']
})
export class AddPyscriptComponent {
  scriptElement?: HTMLScriptElement;

  ngOnInit() {
    this.loadPyScript().then(() => {
      // do stuff
    });
  }

 
  loadPyScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const PyScriptModule = document.querySelector('script[src="https://pyscript.net/latest/pyscript.js"]');
      if(PyScriptModule === null) {

        this.scriptElement = document.createElement("script");
        this.scriptElement.src ='https://pyscript.net/latest/pyscript.js';
        document.head.appendChild(this.scriptElement);

        this.scriptElement.onload = () => resolve();
        this.scriptElement.onerror = () => reject(new Error('Failed to load script'));

      } else {
        resolve();
      }
    });
  }
}