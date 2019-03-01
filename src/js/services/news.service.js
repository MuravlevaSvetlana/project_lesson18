import { ENV } from '../config/env';
import { Http } from '../core/http.service';

export class NewsService {
    constructor() {}

    getNews(token) {
        const http = new Http();
        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/news`, token)
               .then((response) => {
                resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}