import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';
 
@Component({
    // moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.html'
})
 
export class AlertDirective {
    message: any;
 
    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
