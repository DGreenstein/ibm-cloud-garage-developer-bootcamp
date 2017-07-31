const makeStack = (capacity = 2) => {
  if (capacity <= 0) throw new Error('Stack size must be set to a positive integer.');
  const stackValues = [];
  return {
    isEmpty: () => stackValues.length === 0,
    size: () => stackValues.length,
    push: (pushVal) => {
      if (stackValues.length === capacity) throw new Error('Stack cannot exceed size of ' + capacity);
      stackValues.push(pushVal);
    },
    pop: () => {
      if (stackValues.length === 0) throw new Error('Stack cannot be less than 0');
      return stackValues.pop();
    },
    capacity
  };
};

let stack;

describe('the stack spec', () => {
  beforeEach(() => {stack = makeStack();});
  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });

  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.size().should.equal(0);
  });

  it('prevent overflow', () => {
    stack = makeStack(3);
    const doOverflow = () => {stack.push();};
    stack.push();
    stack.push();
    stack.push();
    doOverflow.should.throw('Stack cannot exceed size of 3');
  });

  it('prevent underflow', () => {
    const doUnderflow = () => {stack.pop();};
    doUnderflow.should.throw('Stack cannot be less than 0');
  });

  it('pops the same one pushed', () => {
    stack.push('blue');
    stack.pop().should.equal('blue');
  });
  it('pops the same two pushed', () => {
    stack.push('blue');
    stack.push('red');
    stack.pop().should.equal('red');
    stack.pop().should.equal('blue');
  });

  it('accepts only positive capacity', () => {
    const doSetCapacity = () => {makeStack(-4);};
    doSetCapacity.should.throw('Stack size must be set to a positive integer.');
  });
});
