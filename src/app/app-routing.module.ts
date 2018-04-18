import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashcardsComponent }   from './flashcards/flashcards.component';
import { DecksComponent }     from './decks/decks.component';
import { FlashcardDataService } from './services/flashcard-data.service';
//import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'flashcards', component: FlashcardsComponent },
  { path: 'flashcard-decks',        component: DecksComponent },
  { path: '',   redirectTo: '/flashcard-decks', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [FlashcardDataService],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}