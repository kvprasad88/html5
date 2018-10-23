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
	  
	  https://stackoverflow.com/questions/48948392/infinite-loop-slider-using-keyframes-css3
	  Flickering
	  https://maximelafarie.com/avoid-css-flickering
	  
	  popup data update in the component when it close angular5
	  
	  https://www.concretepage.com/angular-2/angular-2-custom-event-binding-eventemitter-example
	  
	  https://stackoverflow.com/questions/45942769/how-to-refresh-parent-component-after-modal-component-closes
	  
	  https://dzone.com/articles/communication-between-components-using-input-in-an