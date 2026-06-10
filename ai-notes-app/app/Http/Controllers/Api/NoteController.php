<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NoteRequest;
use App\Models\Note;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class NoteController extends Controller
{

    #[OA\Get(
        path: "/api/notes",
        summary: "Get all notes",
        tags: ["Notes"]
    )]
    #[OA\Response(
        response: 200,
        description: "Notes fetched successfully"
    )]
    public function index(Request $request)
    {
        $limit = $request->limit ?? 4;

        $notes = Note::latest()->paginate($limit);

        return response()->json([
            'success' => true,
            'data' => $notes
        ]);
    }


    #[OA\Post(
        path: "/api/notes",
        summary: "Create Note",
        tags: ["Notes"]
    )]
    #[OA\Response(
        response: 201,
        description: "Note created successfully"
    )]
    public function store(NoteRequest $request)
    {
        $note = Note::create($request->validated());

        return response()->json([
            'success' => true,
            'data' => $note
        ], 201);
    }

    #[OA\Get(
        path: "/api/notes/{id}",
        summary: "Get Single Note",
        tags: ["Notes"]
    )]
    #[OA\Parameter(
        name: "id",
        in: "path",
        required: true
    )]
    #[OA\Response(
        response: 200,
        description: "Note details"
    )]

    public function show(Note $note)
    {
        return response()->json([
            'success' => true,
            'data' => $note
        ]);
    }


    #[OA\Put(
        path: "/api/notes/{id}",
        summary: "Update Note",
        tags: ["Notes"]
    )]
    #[OA\Response(
        response: 200,
        description: "Note updated"
    )]
    public function update(NoteRequest $request, Note $note)
    {
        $note->update($request->validated());

        return response()->json([
            'success' => true,
            'data' => $note
        ]);
    }


    #[OA\Delete(
        path: "/api/notes/{id}",
        summary: "Delete Note",
        tags: ["Notes"]
    )]
    #[OA\Response(
        response: 200,
        description: "Note deleted"
    )]
    public function destroy(Note $note)
    {
        $note->delete();

        return response()->json([
            'success' => true,
            'message' => 'Deleted Successfully'
        ]);
    }
}