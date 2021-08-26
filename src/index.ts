import { prop } from '#utils';


class NativeScroller extends HTMLElement {
  @prop('100%') inline!: string;
  @prop('12px') gap!: string;

  _setDefault(name: string, value: string): void {
    if (!this.hasAttribute(name)) {
      this.setAttribute(name, value);
    }
  }

  _lazyLoad(name: keyof this) {
    if (this.hasOwnProperty(name)) {
      const value = this[name];

      delete this[name];
      this[name] = value;
    }
  }

  connectedCallback() {
    this._setDefault('role', 'slider');
    this._lazyLoad('inline');
    this._lazyLoad('gap');
  }

  constructor() {
    super();

    const styles = document.createElement('style');
    const children = document.createElement('slot');

    styles.textContent = /* css */`
      :host:not(:defined),
      :host {
        display: flex;
        contain: content;
        position: relative;
      }
      
      :host([hidden]) {
        display: none;
      }

      :host {
        padding-inline-start: ${this.gap};
        padding-inline-end: ${this.gap};
        display: grid;
        grid: none / auto-flow ${this.inline};
        gap: ${this.gap};
        overflow-x: auto;
        overscroll-behavior: contain auto;
        scroll-padding: ${this.gap};
        -webkit-scroll-snap-type: x mandatory;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        touch-action: pan-x;
        scrollbar-width: none;
      }

      :host(::-webkit-scrollbar) {
        display: none;
      }

      :host > * {
        position: relative;
        padding-block-start: ${this.gap};
        padding-block-end: ${this.gap};
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }

      :host > *:last-child::after {
        inline-size: ${this.gap};
        block-size: 100%;
        position: absolute;
        top: 0;
        right: calc(${this.gap} * -1);
        inset-block-start: 0;
        inset-inline-end: calc(${this.gap} * -1);
        content: "";
      }
    `;

    this
      .attachShadow({ mode: 'open' })
      .append(styles, children);
  }
}

window.customElements.define('native-scroller', NativeScroller);
