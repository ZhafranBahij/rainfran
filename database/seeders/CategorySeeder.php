<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::factory()
        ->count(30)            
        // ->state(new Sequence(
        //     ['name' => 'Anime'],
        //     ['name' => 'Tech'],
        //     ['name' => 'Game'],
        // ))
        ->create();
    }
}
