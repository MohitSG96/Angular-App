import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      [
          { path: '', redirectTo: '/items', pathMatch: 'full' }
        ],
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
