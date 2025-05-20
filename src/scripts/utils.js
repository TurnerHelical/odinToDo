class dom {

     findElement = (selector) => document.querySelector(selector);

     findAllElements = (selector) => document.querySelectorAll(selector);

     createAndAppend = (parent, child, attr, attrVal) => {
        let parentEl = findElement(parent);
        let childEl = document.createElement(child);
        if (attr && attrVal) {
            childEl.setAttribute(attr, attrVal);
        }
        parentEl.appendChild(childEl);
        return childEl;
    };

     clearContent = (selector) => {
        let el = findElement(selector);
        el.innerHTML = '';
        console.log('test')
    }

     editAttr = (selector, attr, attrVal) => {
        let el = findElement(selector);
        el.setAttribute(attr, attrVal);
    }

     toggleClass = function (selector, className) {
        const element = findElement(selector);
        element.classList.toggle(className);
    }

     toggleClassForAll = (selector, className) => {
        const elements = findAllElements(selector);
        elements.forEach(element => {
            element.classList.toggle(className);
        })
     }
}

export {dom};