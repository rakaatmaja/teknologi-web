<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Produk::getProduk()->paginate(5);
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validasi = $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'jumlah' => 'required',
            'foto' => 'required',
            'id_kategori' => 'required',
        ]);
        try {
            $fileName = time() . $request->file('foto')->getClientOriginalExtension();
            $path = $request->file('foto')->storeAs('images', $fileName, 'public');
            $validasi['foto'] = '/storage/' . $path;
            $response = Produk::create($validasi);
            return response()->json([
                'success' => true,
                'message' => 'Success',
                // 'data' => $response
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Errprocessing",
                'error' => $e->getMessage(),
            ],);
        }
    }

    function kategoriGet()
    {
        $products = Kategori::all();
        return response()->json($products);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $products = Produk::find($id)->paginate(5);
        return response()->json($products);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validasi = $request->validate([
            'nama' => 'required',
            'deskripsi' => 'required',
            'jumlah' => 'required',
            'foto' => 'required',
            'id_kategori' => 'required',
        ]);
        try {
            $fileName = time() . $request->file('foto')->getClientOriginalExtension();
            $path = $request->file('foto')->storeAs('images', $fileName, 'public');
            $validasi['foto'] = '/storage/' . $path;
            $response = Produk::find($id);
            $response->update($validasi);
            return response()->json([
                'success' => true,
                'message' => 'Success',
                // 'data' => $response
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Errprocessing",
                'error' => $e->getMessage(),
            ],);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $produk = Produk::find($id);
            $produk->delete();
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Successfully deleted'
                ]
            );
        } catch (\Throwable $e) {
            return response()->json(
                [
                    'message' => 'Failed deleted',
                    'errors' => $e->getMessage(),
                ]
            );
        }
    }
}
