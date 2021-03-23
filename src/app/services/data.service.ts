import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Command } from '../model/command';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const commands: Command[] = [
      {
        id: 1, battleship: 'Millenium Falcon',
        weaponSystem: 'heavy laser cannons',
        target: 'Imperial Star Destroyer',
        quantity: 10000, rate: 100
      },
      {
        id: 2, battleship: 'Millenium Falcon',
        weaponSystem: 'quad-bolt cannons',
        target: 'Death Star',
        quantity: 1000, rate: 700
      },
      {
        id: 3, battleship: 'Tantive IV',
        weaponSystem: 'anti-ship turbolasers',
        target: 'Razor Crest',
        quantity: 1000, rate: 10
      },
      {
        id: 4, battleship: 'Tantive IV',
        weaponSystem: 'tractor beam projector',
        target: 'Death Star',
        quantity: 2000, rate: 100
      },
      {
        id: 5, battleship: 'Home One',
        weaponSystem: 'heavy laser cannons',
        target: 'Executor',
        quantity: 1000, rate: 30
      },
      {
        id: 6, battleship: 'Home One',
        weaponSystem: 'quad-bolt cannons',
        target: 'Razor Crest',
        quantity: 1000, rate: 50
      },
      {
        id: 7, battleship: 'Tantive IV',
        weaponSystem: 'anti-ship turbolasers',
        target: 'Executor',
        quantity: 1000, rate: 700
      },
      {
        id: 8, battleship: 'Home One',
        weaponSystem: 'quad-bolt cannons',
        target: 'Executor',
        quantity: 1000, rate: 10
      },
      {
        id: 9, battleship: 'Millenium Falcon',
        weaponSystem: 'heavy laser cannons',
        target: 'Imperial Star Destroyer',
        quantity: 2000, rate: 100
      },
      {
        id: 10, battleship: 'Home One',
        weaponSystem: 'quad-bolt cannons',
        target: 'Razor Crest',
        quantity: 1000, rate: 30
      }

    ]

    return { commands };
  }


}
