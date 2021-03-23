import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../model/command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private httpClient: HttpClient) { }

  public getCommands(): Observable<Command[]> {
    return this.httpClient.get<Command[]>('api/commands');
  }

  public createCommand(command: Command) {
    return this.httpClient.post('api/commands', command);
  }

}
