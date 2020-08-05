<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Video;
use App\Services\VideoService;
use Illuminate\Mail\Transport\ArrayTransport;

class VideoController extends Controller
{
    private VideoService $videoService;

    public function __construct()
    {
        $this->videoService = new VideoService();
    }

    /**
     * Retorna registros de video
     *
     * @author Ricado Soares <ricardo.soares@rentcars.com>
     * @throws Retorna registros de video
     */
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        return Video::all();
    }

    /**
     * Retorna apenas um registro de video
     *
     * @param [type] $id
     * @author Ricado Soares <ricardo.soares@rentcars.com>
     * @throws Retorna apenas um registro de video
     */
    public function show($id): Video
    {
        return Video::find($id);
    }

    /**
     * Salva registro de video
     *
     * @param Request $request
     * @author Ricado Soares <ricardo.soares@rentcars.com>
     * @throws Salva registro de video
     */
    public function store(Request $request): Video
    {
        return Video::create($request->all());
    }

    /**
     * Atualiza registros de video
     *
     * @param Request $request
     * @param [type] $id
     * @author Ricado Soares <ricardo.soares@rentcars.com>
     * @throws Atualiza registros de video
     */
    public function update(Request $request, int $id): Video
    {
        return $this->videoService->update($request, $id);
    }

    /**
     * Excluir registro de video do banco de dados
     *
     * @param Request $request
     * @param [type] $id
     * @author Ricado Soares <ricardo.soares@rentcars.com>
     * @throws Excluir registro de video do banco de dados
     */
    public function delete(Request $request, $id): int
    {
        $video = Video::findOrFail($id);
        $video->delete($request);
        return 204;
    }
}
