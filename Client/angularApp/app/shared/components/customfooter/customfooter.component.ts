import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-footer',
    templateUrl: './customfooter.component.html',
    styleUrls: ['/customfooter.component.scss']
})

export class CustomFooterComponent {
    public currentYear: number = new Date().getFullYear();
}
