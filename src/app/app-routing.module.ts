import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then((m) => m.ViewsModule),
  },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule),
  },
  {
    path: 'others',
    loadChildren: () =>
      import('./others/others.module').then((m) => m.OthersModule),
  },
  {
    path: 'search-bar',
    loadChildren: () =>
      import('./search-bar/search-bar.module').then((m) => m.SearchBarModule),
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./photos/photos.module').then((m) => m.PhotosModule),
  },
  {
    path: 'credit-card',
    loadChildren: () =>
      import('./credit-card/credit-card.module').then(
        (m) => m.CreditCardModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
