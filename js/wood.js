class Wood{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = loadImage("Assets/wood.png")
    }
    show(){
        image(this.image,this.x,this.y,this.w,this.h)
    }
}

