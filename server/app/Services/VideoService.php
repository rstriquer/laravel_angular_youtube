<?php

namespace App\Services;

use App\Video;
use Illuminate\Http\Request;

class VideoService
{
    public function update(Request $request, int $id): Video
    {
        $requestData = $request->all();
        
        preg_match(
            '#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#',
            $requestData['video_url'],
            $yutubeUrl
        );
        $requestData['video_url'] = end($yutubeUrl);

        $video = Video::findOrFail($id);
        $video->update($requestData);
        return $video;
    }
}
