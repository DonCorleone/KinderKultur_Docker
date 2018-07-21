import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[tmFocus]' })

// tslint:disable-next-line:directive-class-suffix
export class MyFocus implements OnInit {
	constructor(private el: ElementRef, private renderer: Renderer2) {
		// focus won't work at construction time - too early
	}

	ngOnInit() {
		// https://stackoverflow.com/questions/43392607/renderer-is-deprecated-as-a-favor-for-renderer2-alternative-for-invokeelementm
		this.renderer.selectRootElement(this.el.nativeElement).scrollIntoView();
	}
}
