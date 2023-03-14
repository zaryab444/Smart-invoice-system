import { Injectable } from "@angular/core";
import { AppConstants } from "../../app-constants";
import { ToastrService } from "ngx-toastr";
import { ConfigService } from "../services/config.service";


@Injectable({
    providedIn: 'root'
})
export class MessageService {
    config: any = AppConstants.TOASTR_CONFIG;

    constructor(private toaster: ToastrService, private configService: ConfigService) { }

    showSuccess(message: string, title?: string) {
        this.getConfig();
        this.toaster.success(message, title, {
            ...this.config

        });
    }

    showError(message: [] | string, title?: string) {
        this.getConfig();
        if (message) {
            if (Array.isArray(message)) {
                message?.forEach((m: any) => {
                    this.toaster.error(m.message, title, {
                        ...this.config
                    });
                });
            } else {
                this.toaster.error(message, title, {
                    ...this.config
                })
            }
        }
    }

    displayError(message: [] | string, title?: string) {
        this.getConfig();
        if (Array.isArray(message)) {
            message?.forEach((m: any) => {
                this.toaster.error(m, title, {
                    ...this.config
                });
            });
        } else {
            this.toaster.error(message, title, {
                ...this.config
            })
        }
    }

    showInfo(message: string, title?: string) {
        this.getConfig();
        this.toaster.info(message, title, {
            ...this.config
        });
    }

    showWarning(message: string, title?: string) {
        this.getConfig();
        this.toaster.warning(message, title, {
            ...this.config
        });

    }
    private getConfig(): void {
        if (this.configService.clientConfig?.TOASTR_CONFIG) {
            this.config = this.configService.clientConfig?.TOASTR_CONFIG;
        }
    }

}