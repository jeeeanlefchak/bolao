import { AfterViewInit, Injectable } from "@angular/core";
import { PermissionEnum } from "../enum/permission.enum";
import { ToastSeverityService } from "./toast.service";

@Injectable({
    providedIn: 'root',
})

export class SharedDataService implements AfterViewInit {


    constructor(private readonly _toastSeverityService: ToastSeverityService) {

    }

    ngAfterViewInit(): void {

    }

    permission(UID: string): boolean {
        let valid = false;
        if (UID == PermissionEnum.CREATE_GAME) {

        } else if (UID == PermissionEnum.CREATE_JOGADOR) {

        } else if (UID == PermissionEnum.DELETE_JOGADOR) {

        }
        if (!valid) this._toastSeverityService.show('Atenção', 'Voce não tem permissao ', 'error');
        return valid;
    }

    showToast(title: string, message: string, severity: string) {
        this._toastSeverityService.show(title, message, severity)
    }

}