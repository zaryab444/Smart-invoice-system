import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownDataService {

  constructor() { }

  CadencyModeDropdownData = [
    { id: 1, name: 'Invoice' },
    { id: 2, name: 'Notice' }
  ]
  getCadencyModeData() {
    return this.CadencyModeDropdownData;
  }
}
