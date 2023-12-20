const activeCircle = document.querySelector('.container .circle');

const moveData = {
    l: 0,
    t: 0,

    container: {
        width: 300,
        height: 300
    },
    item: {
        width: 50,
        height: 50
    },
    speed: 25,

    rCode: 39,
    lCode: 37,
    tCode: 38,
    bCode: 40,

    isValid(x, y) {
        return x >= 0 && x <= this.container.width && y >= 0 && y <= this.container.height;
    },

    moveLeft() {
        if (this.isValid(this.l - this.speed, this.t))
            this.l -= this.speed;
    },
    moveRight() {
        if (this.isValid(this.l + this.speed + this.item.width, this.t))
            this.l += this.speed;
    },
    moveUp() {
        if (this.isValid(this.l, this.t - this.speed))
            this.t -= this.speed;
    },
    moveDown() {
        if (this.isValid(this.l, this.t + this.speed + this.item.height))
            this.t += this.speed;
    },
    updateCoords(element) {
        element.style.left = `${this.l}px`;
        element.style.top = `${this.t}px`;
    }
}

// keydown
window.onkeydown = (event) => {

    switch (event.keyCode) {
        case moveData.lCode:
            moveData.moveLeft();
            break;

        case moveData.rCode:
            moveData.moveRight();
            break;

        case moveData.tCode:
            moveData.moveUp();
            break;

        case moveData.bCode:
            moveData.moveDown();
            break;
    }

    moveData.updateCoords(activeCircle);
}
