import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FlashcardsComponent }   from './flashcards/flashcards.component';
import { DecksComponent }     from './decks/decks.component';
//import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'flashcards', component: FlashcardsComponent },
  { path: 'flashcard-decks',        component: DecksComponent },
  { path: '',   redirectTo: '/flashcard-decks', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}