describe('Basic', () => {
    it('should confirm that 2 + 2 equals 4', () => {
      const sum = 2 + 2;

      expect(sum).toBe(4);
    });
  
    it('should confirm that true is true', () => {
      const booleanValue = true;

      expect(booleanValue).toBe(true);
    });
  
    it('should confirm that a string contains a substring', () => {
      const message = 'Hello, Jest!';

      expect(message).toContain('Jest');
    });
  });