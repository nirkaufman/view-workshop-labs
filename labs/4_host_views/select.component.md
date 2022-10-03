```typescript
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
      <div class="modal" tabindex="-1" style="display: block">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <p>Modal body text goes here.</p>
                      <div class="mb-3">
                          <label class="form-label">Your Selection: {{ selection }}</label>
                          <select class="form-select" (change)="handleSelection($event)">
                              <option selected>Open this select menu</option>
                              <option value="one">One</option>
                              <option value="two">Two</option>
                              <option value="three">Three</option>
                          </select>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" (click)="closeModal()">Close</button>
                      <button type="button" class="btn btn-primary" (click)="saveAndClose()">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
  `,
  styles: []
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalBody: string;

  @Output() onClose: EventEmitter<any>;
  @Output() onSave: EventEmitter<string>;

  selection: any;

  ngOnInit(): void {
    this.onSave = new EventEmitter<string>();
    this.onClose = new EventEmitter<any>();
  }

  handleSelection($event: any) {
    this.selection = $event.currentTarget.value
  }

  closeModal() {
    this.onClose.emit();
  }

  saveAndClose() {
    this.onSave.emit(this.selection);
  }
}

```
