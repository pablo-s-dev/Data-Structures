interface Item<T> {
    val: T;
    prevItem: Item<T> | null;
};

export default class Stack<T>{

    top: T | null = null

    private lastItem: Item<T> | null = null


    private updateLastVal(){
        this.top = this.lastItem?.val ?? null
    }

    push(val: T){

        this.lastItem = {
            val,
            prevItem: this.lastItem ?? null
        }

        this.updateLastVal()

    }

    

    pop(): T | null {

        if(this.lastItem === null) return null;

        const lastVal = this.lastItem?.val;

        this.lastItem = this.lastItem?.prevItem

        this.updateLastVal()

        return lastVal

    }
}
