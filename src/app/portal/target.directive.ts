import {Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {PortalService} from "./portal.service";

@Directive({
  selector: '[nkTarget]'
})
export class TargetDirective implements OnInit{
  @Input('nkTarget') targetName: string;

  constructor(
      private portalService: PortalService,
      private viewContainer: ViewContainerRef
      ) {}

  ngOnInit(): void {
    this.portalService.addTarget(this.targetName, this.viewContainer)
  }


}
