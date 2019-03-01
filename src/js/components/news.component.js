import { ActiveRoute } from '../core/active-route.service';
import { NewsService } from '../services/news.service';
import { AuthService } from '../services/auth.service';

export class NewsComponent {
    constructor() {
        this._activeRoute = new ActiveRoute();
        this._newsService = new NewsService();
        this._authService = new AuthService();
        this._token = this. _authService.token;
        this._news;
    }

    async beforeRender() {
        this._news = await this._newsService.getNews(this._token);
        
    }

    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this._style()}
            </style>
            <!-- Component html -->
            <div class="container">
                <div class="news-container">
                    <div class="news-owner">
                        <div class="news-owner__card">
                            <div class="card-photo">
                                <img src="${this._news.news[0].owner.avatar}" alt="photo">
                            </div>
                            <div class="card-information">
                                <p class="name">${this._news.news[0].owner.full_name}</p>
                                <p class="country">${this._news.news[0].owner.country}</p>
                            </div>
                        </div>
                        <div class="follow">
                            <button>Follow</button>
                        </div>    
                    </div>
                    <div class="news-owner__picture">
                        <img src="${this._news.news[0].pictures[0].url}" alt="news picture">
                    </div>
                </div>
            </div> 
        `
    }

    _style() {
        return `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            .container {
                max-width: 1170px;
                padding: 0;
            }
            
            .news-container {
                width: 100%;
                padding: 40px;
                display: flex;
            }
            
            .news-owner {
                margin-right: 40px;
            }
            
            .news-owner__card {
                width: 191px;  
            }
            
            .card-photo {
                width: 138px;
                height: 138px;
                margin-right: auto;
                margin-left: auto;
                margin-bottom: 6px;
            }
            
            .card-photo img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                overflow: hidden;
            }
            
            .card-information {
                margin-bottom: 9px;
            }
            
            .name, .country {
                display: block;
                max-width: 180px;
                font-size: 20px;
                text-align: center;
                margin-bottom: 8px;
            }
            
            .news-owner__picture {
                max-width: 939px;
                max-height: 311px;
                overflow: hidden;
            }
            
            .follow {
                z-index: 1;
                position: relative;
            }
            
            .follow button {
                display: block;
                width: 150px;
                padding: 15px 35px;
                background-color: #fff;
                border: 1px solid transparent; 
                border-radius: 150px;
                overflow: hidden;
                margin-right: auto;
                margin-left: auto;
            }
            
            .follow::before {
                content: '';
                width: 156px;
                height: 63px;
                position: absolute;
                top: -3px;
                left: 18px;
                z-index: -1;
                border-radius: 151px;
                background-image:linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%);
            }
       `
    }

    afterRender() {

    }
}