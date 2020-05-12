# Lab 3 - Extendable component

- create a component named `card-deck`
- this component should loop over array of cards and render a bootstrap styled card 

```typescript
import {Component, Input} from '@angular/core';

export enum CardType { Text, Image, Custom }

export interface Card {
  type: CardType;
  title: string;
  bodyText: string;
  imageUrl?: string;
  mutedText?: string
}

@Component({
  selector: 'card-deck',
  template: `
      <div class="card-deck">
          <div class="card" *ngFor="let card of cards">
              <div class="card-body">
                  <h5 class="card-title">{{card.title}}</h5>
                  <p class="card-text">{{ card.bodyText }}</p>
                  <p class="card-text"><small class="text-muted">{{ card.mutedText }}</small></p>
              </div>
          </div>
      </div>
  `,
})
export class CardDeckComponent {
  @Input() cards: Card[];
}
```

- we want to support custom templates
- let's take control of rendering

```typescript
@Component({
  selector: 'nk-lab3',
  template: `
      <div class="card-deck">

          <ng-container #viewContainer></ng-container>

          <ng-template #defaultTextCard let-card>
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">{{card.title}}</h5>
                      <p class="card-text">{{ card.bodyText }}</p>
                      <p class="card-text"><small class="text-muted">{{ card.mutedText }}</small></p>
                  </div>
              </div>
          </ng-template>


      </div>
  `,
})
export class Lab3Component implements DoCheck {
  @ViewChild('viewContainer', {read: ViewContainerRef}) viewContainer: ViewContainerRef;
  @ViewChild('defaultTextCard') defaultTextCard: TemplateRef<CardContext>;

  @Input() cards: Card[] = [];

  ngDoCheck(): void {
    if (this.cards && this.defaultTextCard) {
      this.cards.forEach(card => {
        this.viewContainer.createEmbeddedView(this.defaultTextCard, {
          $implicit: card
        })
      })
    }
  }


}
```

- why ngDoCheck?


