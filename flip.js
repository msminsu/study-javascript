const flipCounter = new FlipCounter({
    ele:'#counter',
    parts:'dd-hh-mm-ss',
    type:'countdown'
});

function FlipCounter (opts) {
       this.ele = document.querySelector(opts.ele);
       this.parts = opts.parts;
       this.type = opts.type;
       this.futureDate;
       this.currentDate;
       this.introLoof  = 20;
       this.flips = [];
       
       that = this;
       
     
       _init();

        function _init(){
        let groups = that.parts.split('-');
        let index = 0;
    
        for (let i = 0; i < groups.length; i++) {
            let part = groups[i].split('');
            for (let j = 0; j < part.length; j++) {
                let flip = new Flip(that.type, that.index, that.ele);
                that.flips.push(flip);
                index++;
            }
        }
    }
    
    

    

}
       



function Flip(type, index, parent){
    this.type = type;
    this.index = index;
    this.parent = parent;
    this.ele; 
    this.num = 0;
    this.backEle;
    this.forwardEle;
    this.flipMotion = new TimelineMax({paused:true});
    _init();

    function _init(){

    }
    
}





