<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Produk extends Model
{
    use HasFactory;
    protected  $table = "produk";
    public $primaryKey = 'id_produk';
    protected $fillable = [
        'nama', 'deskripsi', 'jumlah', 'foto', 'id_kategori',
    ];

    static function getProduk()
    {
        $return = DB::table('produk')
            ->join('kategori', 'produk.id_kategori', '=', 'kategori.id_kategori');
        return $return;
    }
}
