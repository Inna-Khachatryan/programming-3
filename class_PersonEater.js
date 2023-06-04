class PersonEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];
    }


    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var empty = random(this.chooseCell(3))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var ps = new PersonEater(newX, newY, 4)
            personArr.push(ps)
            this.energy = 5
        }
    }
    eat() {
        var food = random(this.chooseCell(3));
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in personArr) {
                if (personArr[i].x == newX && personArr[i].y == newY) {
                    personArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in personEaterArr) {
                if (personEaterArr[i].x == this.x && personEaterArr[i].y == this.y) {
                    personEaterArr.splice(i, 1)
                }
            }
        }

    }
    move() {
        var newCell = random(this.chooseCell(0));
        this.energy--
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newCell[0]
            this.y = newCell[1]
        }
    }
}