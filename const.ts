https://www.academind.com/learn/javascript/rxjs-6-what-changed/  

import { environment } from './../../../environments/environment';

export class ApiRefs {
	
      FETCH_USER = '/auth';
	  
	   url(url) {
        return environment.APP_BASE_HREF + this[url];
    }
	  
}	  

export const environment = {
  production: true,
  //APP_API_BASE: 'https://example.com/',
  APP_BASE_HREF: 'https://example.com/'
 
};

import { ApiRefs } from '../../common/const/api-refs';

 return this.http.get(this.api.url('DASHBOARD'))
      .map((response: Response) => {
        const result = response.json();
        return result.result;
      });