@extends('layouts.app')

@section('main_section')
    @include('layouts.header')
    <div class="pageheader-content row">
        <div class="col-full">

            <div class="featured">
                <div class="featured__column featured__column--big">
                    <div class="entry" style="background-image:url('{{  $bigFeaturedPosts->poster }}');">

                        <div class="entry__content">
                            <span class="entry__category"><a
                                    href="#0">{{ $bigFeaturedPosts->category->name }}</a></span>

                            <h1><a href="{{ route('show_post', ['postId' => $bigFeaturedPosts->id]) }}"
                                   title="">{{ $bigFeaturedPosts->title }}</a></h1>

                            <div class="entry__info">
                                <a href="#0" class="entry__profile-pic">
                                    <img class="avatar" src="images/avatars/user-03.jpg" alt="">
                                </a>

                                <ul class="entry__meta">
                                    <li><a href="#0">{{ $bigFeaturedPosts->user->name }}</a></li>
                                    <li>{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $bigFeaturedPosts->created_at)->format('F, d Y') }}</li>
                                </ul>
                            </div>
                        </div> <!-- end entry__content -->

                    </div> <!-- end entry -->
                </div> <!-- end featured__big -->
                <div class="featured__column featured__column--small">
                    @foreach($featuredPosts['normal'] as $featuredPost)
                        <div class="entry" style="background-image:url('{{ $featuredPost->poster }}');">

                            <div class="entry__content">
                                <span class="entry__category"><a href="#">{{ $featuredPost->category->name }}</a></span>

                                <h1><a href="{{ route('show_post', ['postId' => $featuredPost->id]) }}"
                                       title="">{{ $featuredPost->title }}</a></h1>

                                <div class="entry__info">
                                    <a href="#0" class="entry__profile-pic">
                                        <img class="avatar" src="images/avatars/user-03.jpg" alt="">
                                    </a>

                                    <ul class="entry__meta">
                                        <li><a href="#0">{{ $featuredPost->user->name }}</a></li>
                                        <li>{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s',$featuredPost->created_at)->format('F, d Y') }}</li>
                                    </ul>
                                </div>
                            </div> <!-- end entry__content -->

                        </div> <!-- end entry -->
                    @endforeach
                </div> <!-- end featured__small -->
            </div>
        </div>
    </div>
    </section>
    @include('home.posts')
@endsection
