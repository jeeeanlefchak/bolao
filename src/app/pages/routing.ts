import { Routes } from '@angular/router';

const Routing: Routes = [

    {
        path: '',
        //canActivate: [AuthGuard],
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'game',
        //canActivate: [AuthGuard],
        loadChildren: () => import('../components/jogo/jogos.module').then((m) => m.JogosModule)
    }

];

export { Routing };

