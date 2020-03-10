import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'calculator', loadChildren: './calculator/calculator.module#CalculatorPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'addtemp', loadChildren: './addtemp/addtemp.module#AddtempPageModule' },
  { path: 'adddrug', loadChildren: './adddrug/adddrug.module#AdddrugPageModule' },
  { path: 'babieslist', loadChildren: './babieslist/babieslist.module#BabieslistPageModule' },
  { path: 'addbaby', loadChildren: './addbaby/addbaby.module#AddbabyPageModule' },
  { path: 'updatebaby', loadChildren: './updatebaby/updatebaby.module#UpdatebabyPageModule' },
  { path: 'updatetemp', loadChildren: './updatetemp/updatetemp.module#UpdatetempPageModule' },
  { path: 'updatedrug', loadChildren: './updatedrug/updatedrug.module#UpdatedrugPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
