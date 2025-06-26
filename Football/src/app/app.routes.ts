import { Routes } from '@angular/router';
import { PlayerListComponent } from './list/player-list/player-list.component';
import { PlayerDetailsComponent } from './details/player-details/player-details.component';

export const routes: Routes = [
    { path:'list', component: PlayerListComponent},
    { path:'details', component: PlayerDetailsComponent  },
    { path: '**', redirectTo :'list'}
];
