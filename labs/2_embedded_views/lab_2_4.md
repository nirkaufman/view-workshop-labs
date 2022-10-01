# Implement your own repeat

1. implement a `repaet` directive that works like `ngFor`
2. the user can provider alternative template
3. you should expose the index number

```html
    <ng-container *repeat="let item within items; render=itemTemplate let index= itemIndex;"></ng-container>
```
