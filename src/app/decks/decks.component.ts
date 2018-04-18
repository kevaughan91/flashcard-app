import { Component } from '@angular/core';
import { FlashcardDataService } from '../services/flashcard-data.service';

@Component({
  selector: 'decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent {

    decks: Array<any>;
    constructor(private _flashcardService: FlashcardDataService) {

        this._flashcardService.getDecks()
          .subscribe((data: any) => {
              this.decks = data;
              console.log(data);
          }, (error: any) => {
              console.log(error);

        });
    
    }
    
  
}
