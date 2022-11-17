import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { markFormAsTouched } from 'src/app/@core/utils/generic.utils';

@Component({
  selector: 'app-gift-edit',
  templateUrl: './gift-edit.component.html',
  styleUrls: ['./gift-edit.component.scss'],
})
export class GiftEditComponent implements OnInit {
  giftForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    location: new FormControl('', [Validators.required]),
    tags: new FormArray([]),
    image: new FormControl(null),
    expiredAt: new FormControl(null, [Validators.required]),
  });

  @Input() isEdit = false;
  @Output() create = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  private _gift: any = null;
  @Input() set gift(value: any) {
    console.log('change gift', value);
    if (!!value) {
      this._gift = value;
      this.giftForm.patchValue(value);
      this.giftForm.controls['expiredAt'].setValue(new Date(value.expiredAt));
    }
  }

  get imageControl() {
    return this.giftForm.controls['image'] as FormControl;
  }

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    if (this.giftForm.valid) {
      const gift = { ...this.giftForm.value };
      this.isEdit
        ? this.update.emit({ ...gift, id: this._gift.id })
        : this.create.emit(gift);
    } else {
      markFormAsTouched(this.giftForm);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
