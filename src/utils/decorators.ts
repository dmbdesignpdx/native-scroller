import type { Prop } from '#types';


export const prop: Prop = init => (target, key) => {
  const _init = init ?? null;

  function get(this: HTMLElement) {
    if (this.hasAttribute(key)) {
      return this.getAttribute(key);
    }

    return _init;
  }

  function set(this: HTMLElement, value: string) {
    if (value) {
      this.setAttribute(key, value);
    }
  }

  Object.defineProperty(target, key, {
    get,
    set,
    enumerable: true,
    configurable: true,
  });
};
