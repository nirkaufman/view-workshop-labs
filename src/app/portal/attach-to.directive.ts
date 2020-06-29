import {Directive, Input, OnDestroy, OnInit, Optional, TemplateRef} from '@angular/core';
import {PortalService} from "./portal.service";

@Directive({
  selector: '[nkAttachTo]'
})
export class AttachToDirective implements OnInit, OnDestroy{
  @Input('nkAttachTo') targetName: string;

  constructor(private portalService: PortalService,
              private template: TemplateRef<any>
              ) {}

  ngOnInit(): void {
    this.portalService.attach(this.targetName, this.template);
  }

  ngOnDestroy(): void {
    this.portalService.clear(this.targetName);
  }





}
