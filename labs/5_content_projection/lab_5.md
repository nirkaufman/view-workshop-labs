# Content Projection

Challenge your self!
Implement the tabs feature with content projection.

This is how it should be used:

```html
    <tabs [selectedTabId]="selectedSlot">
        <div *tab="1">Hello slot 1!</div>
        <div *tab="2">Hello slot 2!</div>
        <div *tab="3">Hello slot 3!</div>
    </tabs>
```

Bonus! you can have additional inputs or content slots
