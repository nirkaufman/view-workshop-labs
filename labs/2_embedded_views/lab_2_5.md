# Putting it all together

Your job is to implement a set of directives   
That should be flexible and declarative.
Directives would have to communicate.

This is how it should be used:

```html
  <ng-container appToggle>
      <div appToggleTrigger>
          <h2>Show me or hide me</h2>
          <p *appToggleContent>content to hide or show</p>
      </div>

      <div appToggleTrigger>
          <h2>Show me or hide me 2</h2>
          <p *appToggleContent>content number 2 to hide or show</p>
      </div>

      <div appToggleTrigger>
          <h2>Show me or hide me 3</h2>
          <p *appToggleContent>content number 3 to hide or show</p>
      </div>
  </ng-container>

```
