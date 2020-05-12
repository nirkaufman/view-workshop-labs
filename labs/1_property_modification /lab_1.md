# Lab 1 - Property modification with Renderer

Steps:
1. Create an `<h2>` tag with text in your component template
2. define a `template ref`

```
<h2 #titleRef>Some text inside the title</h2>
```

3. In the component class use `@ViewChild` to query the title
4. log the `elementRef` in an `AfterViewInit` hook

```
export class AppComponent implements AfterViewInit {
  @ViewChild('titleRef') title: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.title);
  }
}
```

5. implement two css classes in your component styles 
```
    styles: [`
        .danger {color: red}
        .important {text-decoration: underline}
    `]  
```

6. create an `object` on you class that maps those classes to booleans

```
  styles = {
    'danger': true,
    'important': false
  }
```

7. inject `Renderer2` 

```
  constructor(private renderer: Renderer2) {}
```

8. inside `ngAfterViewInit` loop over the `object` and use `Renderer.addClass()` method
   to add the object key which the value is true
   
```
  ngAfterViewInit(): void {
    const element = this.title.nativeElement;

    for (let key in this.styles) {
      if (this.styles[key]) {
        this.renderer.addClass(element, key);
      } else {
        this.renderer.removeClass(element, key);
      }
    }
  }
```   
