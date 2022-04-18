<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Rainfog',
            'email' => 'kirakira4141@tes.com',
            'email_verified_at' => now(),
            'password' => bcrypt('kirakira4141'), // password
            'remember_token' => Str::random(10),
        ]);

        $admin->assignRole('true_admin');

        $viewer = User::create([
            'name' => 'Dark Saber',
            'email' => 'saberfuwa@tes.com',
            'email_verified_at' => now(),
            'password' => bcrypt('saberfuwa'), // password
            'remember_token' => Str::random(10),
        ]);

        $viewer->assignRole('viewer');
    }
}
