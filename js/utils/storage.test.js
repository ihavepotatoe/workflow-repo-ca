// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { saveUser, getUsername } from './storage.js';

describe('getUsername', () => {
  it('returns the username when a user is in sotrage', () => {
    const user = {
      data: {
        name: 'john',
      },
    };
    saveUser(user);

    expect(getUsername()).toBe('john');
  });
  it('returns null when no user exists in storage', () => {
    localStorage.clear();

    expect(getUsername()).toBe(null);
  });
});
