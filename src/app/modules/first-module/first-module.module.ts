import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hello2Component } from './components/hello2/hello2.component';



@NgModule({
  declarations: [
    Hello2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [Hello2Component]
})
export class FirstModuleModule { }
