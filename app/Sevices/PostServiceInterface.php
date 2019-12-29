<?php


namespace App\Sevices;


use App\Models\Category;
use App\Models\Post;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

interface PostServiceInterface
{
    /**
     * Get posts by category.
     *
     * @param int $categoryId
     * @return Collection
     */
    public function getCategory(int $categoryId): ?Category;

    public function getPosts(int $page, int $perPage = 10): LengthAwarePaginator;

    public function getCategories(): ?Collection;

    public function getFeaturedPosts(): ?Collection;

    /**
     * Get post by ID.
     *
     * @param int $post
     * @return Post
     */
    public function getPostById(int $post): ?Post;

    /**
     * Create category.
     *
     * @param array $attributes
     * @return int
     */
    public function createCategory(array $attributes): int;

    /**
     * Create post.
     *
     * @param array $attributes
     * @return int
     */
    public function createPost(array $attributes): int;

    /**
     * Publishing method.
     *
     * @param Post $post
     */
    public function publish(Post $post): void;

    /**
     * Unpublish method.
     *
     * @param Post $post
     */
    public function unPublish(Post $post): void;

    /**
     * Remove post.
     *
     * @param Post $post
     */
    public function removePost(Post $post): void;

    /**
     * Remove category.
     *
     * @param Category $post
     */
    public function removeCategory(Category $post): void;
}
