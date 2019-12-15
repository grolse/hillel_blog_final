<?php


namespace App\Sevices;


use App\Models\Category;
use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

class PostService implements PostServiceInterface
{
    /**
     * Get posts by category.
     *
     * @param int $categoryId
     * @return Collection
     */
    public function getPostsByCategory(int $categoryId): ?Collection
    {
        /** @var Collection $posts */
        $categoryPosts = Category::find($categoryId)->with('posts')->first();
        if (!$categoryPosts) {
            return null;
        }
        return $categoryPosts->posts;
    }

    /**
     * Get post by ID.
     *
     * @param int $post
     * @return Post
     */
    public function getPostById(int $post): ?Post
    {
        return Post::find($post);
    }

    /**
     * Create category.
     *
     * @param array $attributes
     * @return int
     */
    public function createCategory(array $attributes): int
    {
        $category = new Category();
        $category->name = $attributes['name'];
        $category->is_active = true;
        $category->save();

        return $category->id;
    }

    /**
     * Create post.
     *
     * @param array $attributes
     * @return int
     */
    public function createPost(array $attributes): int
    {
        $user = Auth::user();

        $post = new Post();
        $post->title = $attributes['title'];
        $post->preview = $attributes['preview'];
        $post->content = $attributes['content'];
        $post->is_publised = false;
        $post->poster = $attributes['poster'];

        $category = Category::findOrFail($attributes['category_id']);

        $post->user()->associate($user);
        $post->category()->associate($category);
        $post->save();

        return $post->id;

    }

    public function getCategories(): ?Collection
    {
        return Category::all();
    }

    /**
     * Publishing method.
     *
     * @param Post $post
     */
    public function publish(Post $post): void
    {
        $post->is_publised = true;
        $post->save();
    }

    /**
     * Unpublish method.
     *
     * @param Post $post
     */
    public function unPublish(Post $post): void
    {
        $post->is_publised = false;
        $post->save();
    }

    /**
     * Remove post.
     *
     * @param Post $post
     */
    public function removePost(Post $post): void
    {
        // TODO: Implement removePost() method.
    }

    /**
     * Remove category.
     *
     * @param Category $post
     */
    public function removeCategory(Category $post): void
    {
        // TODO: Implement removeCategory() method.
    }

}
