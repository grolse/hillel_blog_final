<?php

use Illuminate\Database\Seeder;

class PostSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categoryTest1 = new \App\Models\Category();
        $categoryTest1->name = 'test1';
        $categoryTest1->is_active = true;
        $categoryTest1->save();
    }
}
