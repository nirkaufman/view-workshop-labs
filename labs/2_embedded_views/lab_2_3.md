# Lab 2_3 - Embedded view in a directive

- create a directive named `when`
- this directive should be used on a template element
- so we inject `TemplateRef` and `ViewContainerRef` and get it from the host element

```
@Directive({
  selector: '[nkWhen]'
  standalone: true
})
export class WhenDirective {

  constructor(
      private template:TemplateRef<any>,
      private container: ViewContainerRef
  ) {}
  
}
```

- we want to render the template by attaching it to the view container
- because this is a directive, OnInit is safe

```
  ngOnInit(): void {
    this.container.createEmbeddedView(this.template);
  }
```

- apply this directive to the template in the previous component and cleanup the rest of the code

```
@Component({
  selector: 'nk-lab2',
  standalone: true,
  imports: [WhenDirective]
  template: `
    <ng-container #container></ng-container>
    
    <ng-template nkWhen>
        <h2>lab2 works!</h2>
    </ng-template>
  `,
})
export class Lab2Component {}
```

- Lets pass a `boolean` to the `directive` as an `input`
- then, implement `OnChanges` and render the template if the conditionaly

```
@Directive({
  selector: '[nkWhen]'
})
export class WhenDirective implements OnChanges {
  @Input() nkWhen: boolean;

  constructor(
      private template: TemplateRef<any>,
      private container: ViewContainerRef
  ) {}

  ngOnChanges(): void {
    if(this.nkWhen) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }
}
```
- in the component, bind a checkbox to a boolean and test it:

```
@Component({
  selector: 'nk-lab2',
  template: `
    <input type="checkbox" (change)="toggle()"> Toggle  
    
    <ng-template [nkWhen]="visible">
        <h2>lab2 works!</h2>
    </ng-template>
  `,
})
export class Lab2Component {
  visible:boolean = false;

  toggle() {
    this.visible = !this.visible;
  }
}
```
Bonus!

- Implemnt an option to pass a template for the `else` condition

Usage should look like this:

```html
<ng-template [nkWhen]="visible" [nkElse]="elseTemplate">
    <h2>lab2 works!</h2>
</ng-template>

<ng-template #elseTemplate>
    <h2>Else Template</h2>
</ng-template>

```
