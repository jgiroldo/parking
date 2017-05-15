import { Route } from '@angular/router';
import { AuthenticationComponent } from './index';
import { LogoutGuard } from '../../logout.guard';

export const AuthenticationRoutes: Route[] = [
    {
        path: 'login',
        component: AuthenticationComponent,
        // data: { breadcrumb: "Login", subtitle: "Login" },
        canActivate: [LogoutGuard]
    }

];
