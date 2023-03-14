import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class ConfigService {
	messages: any = {};
	clientConfig: any = {};
	constants: any = {};
	private isLoadComplete: Subject<boolean> = new Subject();

	constructor(private http: HttpClient, private router: Router) { }

	/**
	 * this will call all config loads and return promise
	 */
	loadConfigs(): Promise<any> {
		return new Promise((resolve) => {
			let loadCounts = 0;
			this.loadMessage();
			this.loadClientConfig();
			this.isLoadComplete.subscribe(isComplete => {
				loadCounts++;
				if (loadCounts === 2) {
					resolve(true);
				}
			});
		});
	}



	/**
	 * load default message json
	 */
	loadMessage() {
		this.http.get('assets/config/message.json').subscribe(res => {
			this.messages = res;
			this.isLoadComplete.next(true);
		}, (err) => {
			this.isLoadComplete.next(true);
		});
	}

	/** 
	  * load default config json
	  */
	private loadClientConfig() {
		this.http.get('assets/config/client-config.json').subscribe(res => {
			this.clientConfig = res;
			this.isLoadComplete.next(true);
		}, (err) => {
			this.isLoadComplete.next(true);
			//this.router.navigate(['/login'])
		}
		)

	}


}
