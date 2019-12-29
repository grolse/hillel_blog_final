@extends('layouts.app')

@section('content')
    <table>
        <th>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
            <td></td>
            <td></td>
        </th>
        <tbody>
            @foreach($posts as $post)
                <tr @if(!$post->is_publised)style="background-color: red;"@endif>
                    <td>{{ $post->id }}</td>

                    <td><a href="{{route('show_post', ['postId' => $post->id])}}">{{ $post->title }}</a></td>
                    <td>{{ $post->category->name }}</td>
                    <form method="post" action="{{ route('delete_post', ['postId' => $post->id]) }}">
                        @csrf
                        {{ method_field('DELETE') }}
                        <td><button type="submit">X</button></td>
                    </form>
                    <td>
                    <form method="post" action="{{ route('edit_post', ['postId' => $post->id]) }}">
                        @csrf
                        {{ method_field('PUT') }}
                        <td><button type="submit">Edit</button></td>
                    </form>
                </tr>
            @endforeach
        </tbody>
    </table>
    {{ $posts->links() }}

    <a href="{{route('create_post')}}">Create new post</a>

@endsection
