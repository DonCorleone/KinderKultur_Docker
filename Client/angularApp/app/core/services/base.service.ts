import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { throwError } from 'rxjs';
import * as HttpStatus from 'http-status-codes';

export abstract class BaseService {
	constructor() {}

	protected handleError(error: any) {
		let modelStateErrors = '';

		if (error.status === 400) {
			// handle validation error
			const validationErrorDictionary = JSON.parse(
				JSON.stringify(error.error)
			);
			for (const code in validationErrorDictionary) {
				if (validationErrorDictionary.hasOwnProperty(code)) {
					for (const message in validationErrorDictionary[code]) {
						if (validationErrorDictionary[code].hasOwnProperty(message)) {
							modelStateErrors = modelStateErrors + validationErrorDictionary[code][message];
						}
					}
				}
			}
		} else {
			modelStateErrors = error.message;
		}

		modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
		return Observable.throw(modelStateErrors || 'Server error');
	}
}
