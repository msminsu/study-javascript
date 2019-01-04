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

    function play(futureDate, currentDate){
        if(this.type == 'countdown') {
            this.futureDate = futureDate;
        }
        if(currentDate) {
            this.currentDate = currentDate;
        }else{
            this.currentDate = new Date();
        }

        let currentTime = this._getTime().split('');
        this.intro(currentTime);
    }
    function play2(futreDate) {
        let currentDate = futureDate.split('');
        this.intro(currentDate);
    }

    function intro(currentTime){
        if(this.introLoof < 0) {
            if(this.type == 'countdown') start();
            return;
        }

        let cur = currentTime;
        let time = 20 - this.introLoof;
        let speed  = (this.introLoof/10) + 1;
        this.introLoof -= 1;

        for (let i = 0; i < this.flips.length; i++) {
            let flip = this.flips[i];
            setTimeout ( () => {
                flip.intro(cur[i], speed)
                cur[i] = cur[i] < 1 ? 9 : cur[i] - 1;
            }, i*300);
        }
        setTimeout(() => {
            this.intro(cur)
        }, time *10);
    }

    function start() {
        setInterval( this._update.bind(this), 1000);
    }

    function _getTime() {
        let str = [];
        this.currentDate = new Date(this.currentDate.getTime() + 1000 );
        let diff = this.futreDate.getTime() - this.currentDate.getTime();
        let groups = this.parts.split('-');

        for(let i = 0; i < groups.length; i++) {
            if( groups[i] == 'dd'){
                str.push(this._numCheck(Math.floor(diff/ (1000 * 60 * 60 * 24 ))));
            };
            if( groups[i] == 'hh'){
                str.push(this._numCheck(Math.floor(diff/ (1000 * 60 * 60 ))%24));
            };
            if( groups[i] == 'mm'){
                str.push(this._numCheck(Math.floor(diff/ (1000 * 60 ))% 60));
            };
            if( groups[i] == 'ss'){
                str.push(this._numCheck(Math.floor(diff/ 1000)%60));
            };
        }

        return str.join();
    }

    function _update() {
        let currentTime = this._getTime().split('');
        for( let i = 0; i <  this.flips.length; i++ ) {
            let flip = this.flips[i];
            flip.number = currentTime[i];
        }
    }

     function numCheck(num) {
         let reNum = num;
         reNum < 10 ? reNum = '0' + reNum : reNum;
         return reNum;
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


$(document).ready( function(){
    let futureDate  = new Date(2019, 0, 23, 5);
    var currentDate = new Date(currentDate.getTime()+1000);
    flipCounter.play(futureDate, currentDate);   
});




