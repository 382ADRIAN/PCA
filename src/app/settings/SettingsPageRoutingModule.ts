import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './settings-routing.module';


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {
}
