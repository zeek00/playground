
export class Logic {
    constructor(type) {
      this.type = type;
    }

    getRandomHexColor(){
        if(this.type === "hex"){
            return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        }else {
            throw new Error("This function is only accessible for 'hex' type.");
        }
    }

    generateOptions(){
        if(this.type === "hex"){
            const color1 = this.getRandomHexColor();
            const color2 = this.getRandomHexColor();
            return [color1, color2];
        }else{
            throw new Error("This function is only accessible for 'hex' type.")
        }
    }

    insertAtRandomPosition(arr, element) {
        // Generate a random index between 0 and arr.length (inclusive)
        const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    
        // Insert the element at the random index
        arr.splice(randomIndex, 0, element);
    
        return arr;
    }

}