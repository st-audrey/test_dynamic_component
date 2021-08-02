import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from './alert-component/alert-component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
  <template #alertContainer></template>
  <button (click)="createComponent('success')">Create success alert</button>
  <button (click)="createComponent('danger')">Create danger alert</button>
`,
})
export class AppComponent {

  title = 'test';
  componentRef: ComponentRef<AlertComponent>;

  @ViewChild("alertContainer", { read: ViewContainerRef , static: true }) container;
  
  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type) {
    this.container.clear(); 
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
  }

}
