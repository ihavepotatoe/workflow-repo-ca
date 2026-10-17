import { describe, it, expect } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  it('returns true when current path matches href', () => {
    expect(isActivePath('/login', '/login')).toBe(true);
  });

  it('returns true for root path', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });
  it('returns true when current path href', () => {
    expect(isActivePath('/login', '/login/index.html')).toBe(true);
  });
  it('returns false when paths dont match', () => {
    expect(isActivePath('/login', '/register')).toBe(false);
  });
});
