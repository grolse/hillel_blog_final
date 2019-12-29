{{--        <div class="col-full">--}}
{{--            <nav class="pgn">--}}
{{--                <ul>--}}
{{--                    <li><a class="pgn__prev" href="#0">Prev</a></li>--}}
{{--                    <li><a class="pgn__num" href="#0">1</a></li>--}}
{{--                    <li><span class="pgn__num current">2</span></li>--}}
{{--                    <li><a class="pgn__num" href="#0">3</a></li>--}}
{{--                    <li><a class="pgn__num" href="#0">4</a></li>--}}
{{--                    <li><a class="pgn__num" href="#0">5</a></li>--}}
{{--                    <li><span class="pgn__num dots">…</span></li>--}}
{{--                    <li><a class="pgn__num" href="#0">8</a></li>--}}
{{--                    <li><a class="pgn__next" href="#0">Next</a></li>--}}
{{--                </ul>--}}
{{--            </nav>--}}
{{--        </div>--}}
<div class="row">
    <div class="col-full">
        @if ($paginator->hasPages())
            <nav class="pgn">
                <ul>
                    {{-- Previous Page Link --}}
                    @if ($paginator->onFirstPage())
                        <li aria-disabled="true" aria-label="@lang('pagination.previous')">
                            <span class="pgn__prev current" aria-hidden="true">&lsaquo;</span>
                        </li>
                    @else
                        <li>
                            <a class="pgn__prev" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">&lsaquo;</a>
                        </li>
                    @endif

                    {{-- Pagination Elements --}}
                    @foreach ($elements as $element)
                        {{-- "Three Dots" Separator --}}
                        @if (is_string($element))
                            <li aria-disabled="true"><span class="pgn__num dots">{{ $element }}</span></li>
                        @endif

                        {{-- Array Of Links --}}
                        @if (is_array($element))
                            @foreach ($element as $page => $url)
                                @if ($page == $paginator->currentPage())
                                    <li aria-current="page"><span class="pgn__num current">{{ $page }}</span></li>
                                @else
                                    <li><a class="pgn__num" href="{{ $url }}">{{ $page }}</a></li>
                                @endif
                            @endforeach
                        @endif
                    @endforeach

                    {{-- Next Page Link --}}
                    @if ($paginator->hasMorePages())
                        <li>
                            <a class="pgn__next" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">&rsaquo;</a>
                        </li>
                    @else
                        <li aria-disabled="true" aria-label="@lang('pagination.next')">
                            <span class="pgn__next current" aria-hidden="true">&rsaquo;</span>
                        </li>
                    @endif
                </ul>
            </nav>
        @endif
    </div>
</div>
