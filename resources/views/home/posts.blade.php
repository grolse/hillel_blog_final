<section class="s-content">

    <div class="row masonry-wrap">
        <div class="masonry">

            <div class="grid-sizer"></div>

            @foreach($allPosts as $post)
            <article class="masonry__brick entry format-standard" data-aos="fade-up">

                <div class="entry__thumb">
                    <a href="{{ route('show_post', ['postId' => $post->id]) }}" class="entry__thumb-link">
                        <img src="{{ $post->poster }}"
                             alt="">
                    </a>
                </div>

                <div class="entry__text">
                    <div class="entry__header">

                        <div class="entry__date">
                            <a href="{{ route('show_post', ['postId' => $post->id]) }}">{{ \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->format('F, d Y') }}</a>
                        </div>
                        <h1 class="entry__title"><a href="{{ route('show_post', ['postId' => $post->id]) }}">{{$post->title }}</a></h1>

                    </div>
                    <div class="entry__excerpt">
                        <p>
                        {{ $post->preview }}
                        </p>
                    </div>
                    <div class="entry__meta">
                            <span class="entry__meta-links">
                                <a href="{{ route('show_category', $post->category->id) }}"> {{ $post->category->name }}</a>
                            </span>
                    </div>
                </div>

            </article> <!-- end article -->
            @endforeach

        </div> <!-- end masonry -->
    </div> <!-- end masonry-wrap -->

    {{ $allPosts->links('vendor.pagination.bootstrap-4') }}

</section> <!-- s-content -->

