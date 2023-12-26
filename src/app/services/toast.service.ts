import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root',
})

export class ToastSeverityService {
    constructor(private messageService: MessageService) { }

    show(title:string, message: string, severity: string = 'success') {
        this.messageService.add({ key: 'def_toast', severity: severity, summary: title, detail: message });
    }

}