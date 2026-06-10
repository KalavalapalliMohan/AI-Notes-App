<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->get('query', '');

        $notes = Note::where('title', 'like', "%{$query}%")
            ->orWhere('content', 'like', "%{$query}%")
            ->get();

        return response()->json([
            'success' => true,
            'data' => $notes
        ]);
    }
}