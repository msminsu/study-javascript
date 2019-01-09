var Man = klass(null, {
    __construct: function (what) {
        console.log("Man's constructor");
        this.name = what;        
    },
    getName: function () {
        return this.name;
    }
});

var first = new Man();
first.getName();

