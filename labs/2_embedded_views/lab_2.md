# Lab 2 - Render Embedded view

1. declare an `<ng-template>` tag in your template with some content
```
<ng-template> 
    <h2>some content</h2>
</ng-container>    
```
2. use `@ViewChild` to get a reference to the template

```
@ViewChild(TemplateRef) container;
```

3. implement `OnInit`, use the `createEmbeddedView()` method to get a `View`

```
  ngAfterViewInit(): void {
    const view = this.template.createEmbeddedView({});
    console.log(view);
  }
```

4. inject `ViewContainerRef`  

```
constructor(private container:ViewContainerRef) {}
```

5. use the `ViewContainer` api to attach the created view

```
  ngAfterViewInit(): void {
    const view = this.template.createEmbeddedView({});
    this.container.insert(view);
  }
```

6. open the browser dev tools and inspect the position of the newly created element
7. you can use a method on `ViewContainer` instead and get an `EmbeddedView` in return

```
  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.template);   
  }
```

8. create a placeholder in your component with `<ng-container>`
9. Give ir=t a ref named 'container'

```
<ng-container #container></ng-container>
```
10. Read this container as a `ViewContainerRef` using a `@ViewChild`
11. remove the constructor

```
export class Lab2Component implements AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) container;
  @ViewChild(TemplateRef) template;

  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.template);
  }
}
```
12. inspect the elements on the devtools to verify the view location
