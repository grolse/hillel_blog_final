<?php

namespace App\Http\Controllers;

use App\Sevices\PostServiceInterface;
use Illuminate\Http\Request;

class PostController extends Controller
{

    private $postService;

    public function __construct(PostServiceInterface $postService)
    {
        $this->postService = $postService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = $this->postService->getPosts(1);
        return view('post.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = $this->postService->getCategories();
        return view('admin.post.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'preview' => 'required',
            'content' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);
        $postData = $request->all();

        $poster = $request->file('poster')->store('public');
        $poster = str_replace('public', 'storage', $poster);
        $postData['poster'] = $poster;
        $postId = $this->postService->createPost($postData);
        return response(redirect('/post/' .  $postId));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = $this->postService->getPostById($id);
        return view('post.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = $this->postService->getPostById($id);
        $categories = $this->postService->getCategories();

        return view('post.edit', compact('post', 'categories'));
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = $this->postService->getPostById((int)$id);
        if (!$post) {
            abort(404);
        }
        if ($post->is_publised) {
            $this->postService->unPublish($post);
        } else {
            $this->postService->publish($post);
        }
        return back();
    }
}
