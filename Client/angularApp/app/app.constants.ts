import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:5000/';
    public ApiUrl = 'api/links';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
