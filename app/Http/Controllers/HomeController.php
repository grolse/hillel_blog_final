<?php


namespace App\Http\Controllers;


use App\Sevices\PostServiceInterface;

class HomeController extends Controller
{
    private $postService;

    public function __construct(PostServiceInterface $postService)
    {
        $this->postService = $postService;
    }

    public function index()
    {
        $posts = $this->postService->getFeaturedPosts();

        $allPosts = $this->postService->getPosts(1);
        $bigFeaturePost = null;
        $featuredPosts = [];
        foreach ($posts as $key => $post) {
            if ($key === 0) {
                $bigFeaturedPosts = $post;
            } else {
                $featuredPosts['normal'][] = $post;
            }
        }
        return view('home.index', compact('allPosts', 'featuredPosts','bigFeaturedPosts'));
    }
}
