import { Observable } from 'rxjs/Rx';


export abstract class BaseService {

	constructor() { }

	protected handleError(error: any) {
		const applicationError = error.headers.get('Application-Error');

		// either applicationError in header or model error in body
		if (applicationError) {
			return Observable.throw(applicationError);
		}

		let modelStateErrors = error.message;

		modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
		return Observable.throw(modelStateErrors || 'Server error');
	}
}
