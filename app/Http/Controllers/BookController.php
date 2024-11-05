<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = book::all();
        return Inertia::render('books/index', ['books' => $books] );
    }

    /** 
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('books/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $request->validate([
            'judul_buku' => 'required|string',
            'pengarang' => 'required|string',
            'penerbit' => 'required|string',
            'deskripsi' => 'required|string',
        ]);

        Book::create($request->all());
        return redirect()->route('books.index')->with('success', 'Buku berhasil ditambah');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Book::find($id);
        if (!$book) {
            return redirect('books');
        }
        $book->delete();
        return redirect('books');
    }
}
