import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { convertToBase64 } from 'src/app/@core/utils/generic.utils';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  @Input() control?: FormControl;
  @ViewChild('fileUploader', { static: false })
  uploader?: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  async onChange(event: any) {
    const fileBase64 = await convertToBase64(event.target.files[0]);
    this.control?.setValue(fileBase64);
  }

  onTriggerUpload(): void {
    this.uploader?.nativeElement.click();
  }

  getBg() {
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return !!this.control?.value
      ? regex.test(this.control?.value)
        ? `https://res.cloudinary.com/dh6pz73hd/image/upload/v1668707902/${this.control.value}`
        : this.control.value
      : '/assets/placeholders/image.png';
  }

  onRemoveImage(event: any) {
    event.stopPropagation();
    this.control?.setValue(null);
  }
}
