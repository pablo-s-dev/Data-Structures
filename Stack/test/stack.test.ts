import Stack from "../stack"

describe('Stack test', ()=>{

    it('Adds item on top', ()=>{
        let stack = new Stack()
        stack.push(1)
        expect(stack.top === 1)
    })

    it('Removes item on top', ()=>{
        let stack = new Stack()
        stack.pop()
        expect(stack.top === null)
    })
})