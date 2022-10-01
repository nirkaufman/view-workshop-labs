# Implement Repeat Template Inside A Component

1. create a template for a list item `<li>`

```html
  <ng-template>
    <li>List Item</li>
</ng-template>
```

2. Query the template inside the component.
3. create an array of strings represents colors

```typescript
 colors: Array<string> = ['red', 'green', 'blue'];
```

4. Query a `<ul>` tag as a `ViewContainer`
5. Implement `AfterViewInit` and loop over the colors array.
5. For each color - create a embedded view from the template and insert to the view.

The end results in browser should look like this:
```html
<ul>
   <li>List Item</li> 
   <li>List Item</li> 
   <li>List Item</li> 
</ul>
```
