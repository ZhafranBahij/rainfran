<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name' => 'true_admin',
            'guard_name' => 'web'
        ]);

        Role::create([
            'name' => 'viewer',
            'guard_name' => 'web'
        ]);
    }
}
