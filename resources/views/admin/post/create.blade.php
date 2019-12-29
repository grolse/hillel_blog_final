<form method="post" enctype="multipart/form-data">
    @csrf
    <label for="title">Title</label>

    <input type="text" id="title" name="title"/>
    <label for="preview">Preview</label>

    <textarea name="preview" id="preview"></textarea>

    <label for="content">Content</label>
    <textarea name="content" id="content"></textarea>
    <label for="category">Category</label>

    <select name="category_id" id="category">
        @foreach($categories as $category)
            <option value="{{$category->id}}">{{$category->name}}</option>
        @endforeach
    </select>
    <label for="poster">Poster</label>
    <input type="file" name="poster"/>
    <input type="submit" value="Create post"/>
</form>
