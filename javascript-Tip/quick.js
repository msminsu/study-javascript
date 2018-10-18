var Quickmenu = (function(){

    function Person(opts){
        this.opts = {
            element:"#contents",
            position:"center",
            margin:0,
            fix:100,
            speed:600,
            quickAni:false
        }

        $.each(this.opts, function(index, value) {
            this.opts = index;
        });

        this.opts = opts;

        this.state = {
            d1y:[],
            d2y:[],
            d1Length:"",
            d2Length:""
        };

        this.selector = {
            wrap:"[data-quick='wrap']",
            parent:"[data-parent='wrap']",
            list:"[data-menu='list']",
            con:"[data-quick='con']",
            top:"[data-btn='top']"
        };

        this.init();
    };

    Person.prototype = {
        init:function(){
            this.position();
            this.resize();
            this.scrolling();
            this.controls();
        },
        controls:function(){
            var context = this;

            $(this.selector.parent).on("click", ""+this.selector.list+"", function(e){
                e.preventDefault();
                e.stopPropagation();
                context.state.id = $(this).find("a").attr("href");
                context.slideMove();
            });

            $(this.selector.top).on("click", function(){
                context.slideTop();
            });
        },
        resize:function(){
            this.state.quickTop = $(this.selector.wrap).offset().top;
            this.state.firstTop = $(this.opts.element).children($(this.selector.con)).eq(0).offset().top;
        },
        scrolling:function(){
            var context = this;
            $(window).on("scroll", function () {
                context.state.scrollTop = $(window).scrollTop();
                context.scrollAction();
            }).scroll();
        },
        scrollAction:function(){
            var context = this;
            $.each($(context.opts.element).children($(context.selector.con)), function(i, el) {
                context.state.d1y = $(el).offset().top - context.opts.margin;
                if(context.state.d1y<=context.state.scrollTop){
                    context.state.d1Num = i;
                }
                $.each($(el).children($(context.selector.con)), function(i, el) {
                    context.state.d2y = $(el).offset().top - context.opts.margin;
                    if(context.state.d2y<=context.state.scrollTop){
                        context.state.d2Num = i;
                    }
                });
            });
            this.anchor();
        },
        position:function(){
            $(this.selector.wrap).addClass(this.opts.position);
        },
        anchor:function(){
            this.end();
            this.remove();
            this.add();
            this.sticky();
        },
        add:function(){
            $(this.selector.parent).children(this.selector.list).eq(this.state.d1Num).addClass("on").find(this.selector.list).eq(this.state.d2Num).addClass("on");
            if(this.state.scrollTop<this.state.firstTop - this.opts.margin) this.remove();
        },
        remove:function(){
            $(this.selector.parent).find(this.selector.list).removeClass("on");
        },
        end:function(){
            this.state.endScroll = this.state.scrollTop === $(document).height() - $(window).height();
            if(this.state.endScroll){
                this.state.d1Num = $(this.selector.parent).children(this.selector.list).length-1;
                this.state.d2Num = $(this.selector.parent).children(this.selector.list).eq(this.state.d1Num).find(this.selector.list).length-1;
            }
        },
        slideMove:function(){
            this.state.offset = $(this.state.id).offset().top;
            $("html, body").stop().animate({scrollTop: this.state.offset - this.opts.margin}, this.opts.speed);
        },
        slideTop:function(){
            $("html, body").stop().animate({scrollTop:0}, this.opts.speed);
        },
        sticky:function(){
            if(this.state.scrollTop>=this.state.quickTop - this.opts.fix){
                if(this.opts.quickAni){
                    $(this.selector.wrap).stop().animate({top:this.state.scrollTop + this.opts.margin}, 300);
                }else{
                    $(this.selector.wrap).addClass("fixed");
                }
            }else{
                if(this.opts.quickAni){
                    $(this.selector.wrap).stop().animate({top:this.state.quickTop}, 300);
                }else{
                    $(this.selector.wrap).removeClass("fixed");
                }
            }
        }
    };

    return Person;

})();

var quickmenu = new Quickmenu({
    element:"#contents",
    position:"center",
    margin:100,
    fix:100,
    speed:600,
    quickAni:true
});

$(document).ready(function () {
    $('body').TopBtn();
    $('.toggle-caution').Folding({open: true});
});



// WEBPACK FOOTER //
// ./src/js/voyage.js