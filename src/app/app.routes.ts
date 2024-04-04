import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CategoryMasterComponent } from './components/category-master/category-master.component';
import { MyBasketComponent } from './components/my-basket/my-basket.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { ProductMasterComponent } from './components/product-master/product-master.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'categories', component: CategoryMasterComponent, canActivate: [authGuard] },
    { path: 'my-basket', component: MyBasketComponent, canActivate: [authGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'products/:category', component: ProductMasterComponent, canActivate: [authGuard] },
    { path: 'product-detail/:id', component: ProductDetailComponent, canActivate: [authGuard] },
];
