import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DiscordBarComponent } from './discord-bar/discord-bar.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'discord-bar', component: DiscordBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
