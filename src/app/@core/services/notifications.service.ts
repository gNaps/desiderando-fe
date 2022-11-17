import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private messageService: MessageService) {}

  showSuccess(
    summary: string = 'Successo!',
    detail: string = 'Operazione completata'
  ) {
    this.showToast('success', summary, detail);
  }

  showFail(
    summary: string = 'Oh no!',
    detail: string = 'Qualcosa è andato storto'
  ) {
    this.showToast('error', summary, detail);
  }

  private showToast(severity: string, summary: string, detail: string) {
    console.log('behh??');
    this.messageService.add({
      severity,
      summary,
      detail,
    });
  }
}
