function Article() {
    this.tags  = ['js', 'css'];
} 
var article = new Article();

//
function BlogPost() {}
BlogPost.prototype = article;

var blog = new BlogPost();

//
function StaticPage() {
    Article.call(this);
}

var page = new StaticPage();

alert(article.hasOwnProperty('tags'));
alert(blog.hasOwnProperty('tags'));
alert(page.hasOwnProperty('tags'));
