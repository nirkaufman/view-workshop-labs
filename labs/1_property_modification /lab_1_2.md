# Lab 1 - Property modification directive

1. create a directive name is `class`

```
@Directive({
  selector: '[nkClass]'
})
export class ClassDirective {

  constructor() { }

}
```

2. create an input that accept an `object` (reuse directive selector)

```typescript
@Input() nkClass: Record<string, boolean>;
```

2. inject `Renderer2`, and `ElementRef`

```
  constructor(
      private renderer: Renderer2,
      private element:ElementRef
  ) {}
```

3. copy the logic for adding classes from the previous component, 
   use the provided `nkClass` object and the injected `element`
   
```typescript
  ngOnChanges(changes: SimpleChanges): void {
    const element = this.element.nativeElement;

    for (let key in this.nkClass) {
      if (this.nkClass[key]) {
        this.renderer.addClass(element, key);
      } else {
        this.renderer.removeClass(element, key);
      }
    }
  }
```    

4. go back to the previous component
5. remove the `ref` from the `<h2>` tag
```
<h2>Some text inside the title</h2>
```

6. delete all class content

```
export class Lab1Component  {}
```

7. apply the `nkClass` directive and provide the `styles` object
   as an `input`
   
```
<h2 [nkClass]="{ 'danger': true, 'important': true }">Some text inside the title</h2>
```

8. to check the dynamics, create and bind two checkboxes to the object values

```
@Component({
  selector: 'nk-lab1',
  template: `
      <input type="checkbox" (change)="isDanger = !isDanger"> danger
      <input type="checkbox" (change)="isImportant = !isImportant"> important

      <h2 [nkClass]="{ 'danger': isDanger, 'important': isImportant }">Some text inside the title</h2>
  `,
  styles: [`
      .danger {color: red}
      .important {text-decoration: underline}
  `]
})
export class Lab1Component {
  isDanger: boolean;
  isImportant: boolean
}
```
