import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Command } from 'src/app/model/command';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {

  success: boolean = false;
  @Output() isUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();
  form = new FormGroup({
    battleship: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    weaponSystem: new FormControl('', [
      Validators.required
    ]),
    rate: new FormControl('', Validators.required),
    target: new FormControl('', Validators.required),


  });

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
  }

  addCommand() {
    let command: Command = {
      battleship: this.form.value.battleship,
      quantity: this.form.value.quantity, weaponSystem: this.form.value.weaponSystem, rate: this.form.value.rate, target:
        this.form.value.target
    }
    this.commandService.createCommand(command).subscribe(data => {
      this.isUpdated.emit(true);
      this.form.reset();
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 3000)

    })

  }

}
