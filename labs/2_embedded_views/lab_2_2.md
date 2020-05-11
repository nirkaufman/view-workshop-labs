# Lab 2_2 - Embedded view with context

- declare a template variable on the template and use it within the template

```
    <ng-template let-value>
        <h2>lab2 works! with {{ value }}</h2>
    </ng-template>
```

- when you create the view, provide a context object and initialize the $implicit property

```
  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.template, {$implicit: 25});
  }
```

- you should get a change detection error saying that the value changed after it was checked
- to fix it, make sure to trigger change detection on this view

```
  ngAfterViewInit(): void {
    const view = this.container.createEmbeddedView(this.template, {$implicit: 25});
    view.detectChanges();
  }
```

- provide another value in context

```
    const view = this.container.createEmbeddedView(this.template, {
      $implicit: 25,
      anotherValue: 'another value'
    });
```

- assign a template variable to it in order to use it within your template

```
    <ng-template let-value let-another="anotherValue">
        <h2>lab2 works! with {{ value }} {{ another }}</h2>
    </ng-template>
``` 
