<?php

namespace App\Sevices;

use App\Models\Post;

interface CommentServiceInterface
{
    public function addComment(array $attributes, Post $post);

    public function delete(int $commentId);
}
