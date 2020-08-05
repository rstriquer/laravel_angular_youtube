import { Component, OnInit } from '@angular/core'
import { Video } from './video'
import { VideosService } from './videos.service'
import { AppComponent } from '../app.component'

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    providers: [VideosService]
})

export class VideosComponent implements OnInit {
    videos: Video[]
    editVideo: Video
    constructor(private videoService: VideosService) {}
    ngOnInit() {
        this.getVideos()
    }
    getVideos():void {
        this.videoService.getVideos().subscribe(videos => (this.videos = videos))
    }
    playVideo(video: Video) {
        (<HTMLIFrameElement>document.getElementById("youtubePlayer")).src
            = "https://www.youtube.com/embed/" + video.video_url
    }

    add(name:string): void {
        this.editVideo = undefined
        name = name.trim()
        if (!name) {
            return
        }
        const newVideo: Video = { name } as Video
        this.videoService.addVideo(newVideo).subscribe(video => this.videos.push(video))
    }
    delete (video: Video): void {
        this.videos = this.videos.filter(h => h !== video)
        this.videoService.deleteVideo(video.id).subscribe()
    }
    edit(video) {
        this.editVideo = video
    }
    update() {
        if(this.editVideo) {
            this.videoService.updateVideo(this.editVideo).subscribe(video => {
                const ix = video ? this.videos.findIndex(h => h.id == video.id) : -1
                if (ix > -1) {
                    this.videos[ix] = video
                }
            })
            this.editVideo = undefined
        }
    }
}
