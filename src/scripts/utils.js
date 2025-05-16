function dom() {
    const findElement = (selector) => document.querySelector(selector);
    const findAllElements = (selector) => document.querySelectorAll(selector);
    const createAndAppend = (parent, child, attr, attrVal) => {
        let parentEl = findElement(parent);
        let childEl = document.createElement(child);
        if (attr && attrVal) {
            childEl.setAttribute(attr, attrVal);
        }
        parentEl.appendChild(childEl);
        return childEl;
    };
    const clearContent = (selector) => {
        let el = findElement(selector);
        el.innerHTML = '';
        console.log('test')
    }
    const editAttr = (selector, attr) => {
        let el = findElement(selector);
        el.setAttribute(`${attr}`);
    }
    const toggleClass = function (selector, className) {
        const element = findElement(selector);
        element.classList.toggle(className);
    }
    const toggleClassForAll = (selector, className) => {
        const elements = findAllElements(selector);
        elements.forEach(element => {
            element.classList.toggle(className);
        })
    }
    return { findElement, createAndAppend, toggleClass, findAllElements, toggleClassForAll, clearContent, editAttr };
}

export {dom};