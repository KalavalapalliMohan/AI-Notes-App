<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Note;
use OpenApi\Attributes as OA;

class SummaryController extends Controller
{
    public function generate(Note $note)
    {
        $summary = substr($note->content, 0, 100) . '...';

        $note->update([
            'summary' => $summary
        ]);

        return response()->json([
            'success' => true,
            'summary' => $summary
        ]);
    }
}