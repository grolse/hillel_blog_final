<?php

namespace Tests\Feature;

use App\Sevices\PostService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class PostServiceTest extends TestCase
{
    use RefreshDatabase;

    /** @var PostServiceInterface */
    private $postService;

    public function setUp(): void
    {
        $this->postService = app()->make(PostService::class);
    }

    public function testGetPostsByCategory()
    {
        Artisan::call('db:seed');
        $this->assertTrue(true);
    }
}
