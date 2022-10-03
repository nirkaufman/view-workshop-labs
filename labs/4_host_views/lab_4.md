# Lab 4 - practice HostView Creation

1. create an instance of a Component and insert it to a `viewContainer`
2. create a structural directive that do this for you, it should look like this:

```html
 <ng-container *renderComponent="ComponentClass"></ng-container>
```

Bonus:
Pass props to this directive with micro syntax:

```html

<ng-container *renderComponent="ComponentClass; withContext="context"></ng-container>

context = {}
```



