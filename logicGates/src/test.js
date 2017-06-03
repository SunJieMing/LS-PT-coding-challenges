let logicGates = require("./logicGates");

describe('NAND(x,y)', function() {
  it('should return true if both inputs are false', function() {
    expect(logicGates.NAND(0,0)).toBe(1);
  });
  it('should return true if only one input is true', function() {
    expect(logicGates.NAND(0,1)).toBe(1);
    expect(logicGates.NAND(1,0)).toBe(1);
  });
  it('should return false if both inputs are true', function() {
    expect(logicGates.NAND(1,1)).toBe(0);
  });
});

describe('NOT(n)', function() {
  it('should return true if its input is false', function() {
    expect(logicGates.NOT(0)).toBe(1);
  });
  it('should return false if its input is true', function() {
    expect(logicGates.NOT(1)).toBe(0);
  });
});

describe('AND(x,y)', function() {
  it('should return false if both inputs are false', function() {
    expect(logicGates.AND(0,0)).toBe(0);
  });
  it('should return false if only one input is true', function() {
    expect(logicGates.AND(0,1)).toBe(0);
    expect(logicGates.AND(1,0)).toBe(0);
  });
  it('should return true if both inputs are true', function() {
    expect(logicGates.AND(1,1)).toBe(1);
  });
});

describe('OR(x,y)', function() {
  it('should return false if both inputs are false', function() {
    expect(logicGates.OR(0,0)).toBe(0);
  });
  it('should return true if only one input is true', function() {
    expect(logicGates.OR(0,1)).toBe(1);
    expect(logicGates.OR(1,0)).toBe(1);
  });
  it('should return true if both inputs are true', function() {
    expect(logicGates.OR(1,1)).toBe(1);
  });
});

describe('XOR(x,y)', function() {
  it('should return false if both inputs are false', function() {
    expect(logicGates.XOR(0,0)).toBe(0);
  });
  it('should return true if only one input is true', function() {
    expect(logicGates.XOR(0,1)).toBe(1);
    expect(logicGates.XOR(1,0)).toBe(1);
  });
  it('should return false if both inputs are true', function() {
    expect(logicGates.XOR(1,1)).toBe(0);
  });
});
