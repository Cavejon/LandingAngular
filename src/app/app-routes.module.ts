import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { CoinComponent } from './components/coin/coin.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // loadChildren: () => import('./components/about/about.component').then(m => m.AboutComponent) 
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'coin',
        component: CoinComponent
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }