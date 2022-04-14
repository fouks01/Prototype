'use strict';

let body = document.querySelector('body');


const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.selectorNew = function () {

    if (this.selector[0] === '.') {
        const div = document.createElement('div');
        const sel = this.selector.substring(1);
        div.classList.add(sel);
        div.style.cssText = `selector: ${this.selector}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize}`;
        div.textContent = 'Это блочный элемент';

        body.before(div);

    } else if (this.selector[0] === '#') {
        const paragraph = document.createElement('p');
        paragraph.id = this.selector.substring(1);
        paragraph.style.cssText = `selector: ${this.selector}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize}`;
        paragraph.textContent = 'Это параграф';

        body.before(paragraph);

    }
};

const divBlock = new DomElement('.block', '20px', '20px', 'black', '16px');

const paragraphBlock = new DomElement('#best', '40px', '50px', 'green', '16px');


divBlock.selectorNew();
paragraphBlock.selectorNew();