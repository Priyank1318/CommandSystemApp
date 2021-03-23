import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Command } from './model/command';
import { CommandService } from './services/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'CommandSystemsApplication';
  cols: { field: string; header: string; }[] = [];
  commands: Command[] = [];
  commandStateSubscription: Subscription = new Subscription();
  totalQuantity = 0;
  averageRate = 0;
  combinableAttacksList: string[] = [];

  constructor(private commandService: CommandService) { }
  ngOnDestroy(): void {
    this.commandStateSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.getCommands();
    this.cols = [
      { field: 'id', header: 'Command Id' },
      { field: 'battleship', header: 'Battleship' },
      { field: 'weaponSystem', header: 'Weapon System' },
      { field: 'target', header: 'Target' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'rate', header: 'Rate' }

    ];

  }


  getCommands() {
    this.commandService.getCommands().subscribe((data: Command[]) => {
      console.log(data);
      this.commands = data;
      this.updateSummaryDetails();
    });
  }

  updateSummaryDetails() {
    this.totalQuantity = this.commands.map(a => a.quantity).reduce((a, b) => {
      return a + b;
    });
    this.averageRate = (this.commands.map(a => a.rate).reduce((a, b) => {
      return a + b;
    })) / this.commands.length;
    const attacks: string[] = [];
    this.commands.forEach((command) => {
      if ((this.commands.filter((el) => el.target === command.target
        && el.battleship === command.battleship
        && el.weaponSystem === command.weaponSystem).length) >= 2) {
        const attack = command.battleship + '|' + command.target + '|' + command.weaponSystem;
        if (attacks.indexOf(attack) == -1) {
          attacks.push(attack);
        }
      }
    });
    this.combinableAttacksList = attacks;

  }

  getAttackDetails(attack: string): string {
    const attackParts = attack.split('|');
    const battleship = attackParts[0];
    const target = attackParts[1];
    const weaponSystem = attackParts[2];
    const commandsList = this.commands.filter(command =>
    command.battleship === battleship && command.target === target && command.weaponSystem === weaponSystem);
    const quantity = commandsList.map(a => a.quantity).reduce((a, b) => {
      return a + b;
    });
    const rate = (commandsList.map(a => a.rate).reduce((a, b) => {
      return a + b;
    })) / commandsList.length;
    return `(${battleship},${weaponSystem},${target}), quantity=${quantity}, rate=${rate}`;

  }
}
