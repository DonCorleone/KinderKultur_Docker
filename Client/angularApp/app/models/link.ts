export class Link {
	public id: string;
	public name: string;
	public desc: string;
	public url: string;
	public urldesc: string;

	public get hostName() {
		const match = this.url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
		if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
			return match[2];
		} else {
			return null;
		}
	}
}
