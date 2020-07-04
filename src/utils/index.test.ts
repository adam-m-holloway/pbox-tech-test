import { formatPrice } from './index';

describe('formatPrice', () => {
  it('should return the number in GBP currency format', () => {
    expect(formatPrice(5)).toBe('£5.00');
  });

  it('should return the number in GBP currency format including comma', () => {
    expect(formatPrice(1600.19)).toBe('£1,600.19');
  });
});
