import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Video } from './video'
import { HttpErrorHandler, HandleError } from '../http-error-handler.service'

@Injectable()
export class VideosService {
    private handleError: HandleError

    constructor(private http: HttpClient, HttpErrorHandler: HttpErrorHandler) {
        this.handleError = HttpErrorHandler.createHandleError()
    }

    getVideos(): Observable<Video[]> {
        return this.http
            .get<Video[]>('api/videos')
            .pipe(catchError(this.handleError('getVideos', [])))
    }
    addVideo(video: Video): Observable<Video> {
        return this.http
            .post<Video>('api/videos', video)
            .pipe(catchError(this.handleError('addVideo', video)))
    }

    updateVideo(video: Video): Observable<Video> {
        return this.http
            .post<Video>('api/videos/${video.id}', video)
            .pipe(catchError(this.handleError('updateVideo', video)))
    }

    deleteVideo(id: number): Observable<{}> {
        const url = `api/videos/${id}`
        return this.http
            .delete(url)
            .pipe(catchError(this.handleError('deleteVideo')))
    }
}
