<?php


namespace App\Sevices;


use App\Models\Comment;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class CommentService implements CommentServiceInterface
{
    public function addComment(array $attributes, Post $post)
    {
        $user = Auth::user();
        $comment = new Comment();
        $comment->user()->associate($user);
        $comment->post()->associate($post);
        $comment->save($attributes);
    }

    /**
     * @param int $commentId
     * @throws \Exception
     */
    public function delete(int $commentId)
    {
        /** @var Comment $comment */
        $comment = Comment::find($commentId);
        $comment->delete();
    }

}
