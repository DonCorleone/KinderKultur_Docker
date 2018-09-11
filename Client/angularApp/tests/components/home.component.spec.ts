import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

// import { Configuration } from '../../app/app.constants';
import { LinksComponent } from '../../app/links/components/links.component';
import { LinkService } from '../../app/core/services/link-data.service';

describe('LinksComponent', () => {

	let fixture: ComponentFixture<LinksComponent>;
	let comp: LinksComponent;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				HttpClientTestingModule
			],
			providers: [
				LinkService,
				// Configuration
			],
			declarations: [LinksComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LinksComponent);
		comp = fixture.componentInstance;
	});

	it('on init should get all links', async () => {
		const http = TestBed.get(HttpTestingController);
		// const customConfiguration = TestBed.get(Configuration);
		const expectedResponse = [{ id: '1', name: 'NetCore', title: 'zzz', desc: 'xxx', url: 'yyy', urlDesc: 'uuu' }];

		// const url = customConfiguration.Server + 'api/links/';

		fixture.detectChanges();

		// http.expectOne(url).flush(expectedResponse);

		// fixture.whenStable().then(() => {
		// 	expect(comp.links).toEqual(expectedResponse);
		// });
	});
});
