import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponentComponent } from './product-form-component/product-form-component.component';

const routes: Routes = [
{
  path:'add',component:ProductFormComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
