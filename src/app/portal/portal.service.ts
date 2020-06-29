import {EmbeddedViewRef, Injectable, TemplateRef, ViewContainerRef} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PortalService {
  private targets: Map<string, ViewContainerRef>;

  constructor() {
    this.targets = new Map<string, ViewContainerRef>();
  }

  addTarget(targetName: string, viewContainer: ViewContainerRef) {
    this.targets.set(targetName, viewContainer)
  }

  attach(targetName:string, template:TemplateRef<any>) {
    const embeddedView:EmbeddedViewRef<any> = this.getTarget(targetName)?.createEmbeddedView(template);
    embeddedView.detectChanges();
  }

  clear(targetName: string) {
    this.getTarget(targetName)?.clear();
  }

  private getTarget(targetName:string): ViewContainerRef {
    return this.targets.has(targetName) ? this.targets.get(targetName) : null;
  }

}
