// jest-dom adds custom jest matchers for asserting on DOM nodes.  
// allows you to do things like:  
// expect(element).toHaveTextContent(/react/i)  
// learn more: https://github.com/testing-library/jest-dom  
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
    writable : true,
    value    : jest.fn().mockImplementation(query => ({
        matches             : false,
        media               : query,
        onchange            : null,
        addListener         : jest.fn(), // Deprecated
        removeListener      : jest.fn(), // Deprecated
        addEventListener    : jest.fn(),
        removeEventListener : jest.fn(),
        dispatchEvent       : jest.fn()
    }))
});

// store the original function
const originalGetComputedStyle = window.getComputedStyle;

// mock the function
Object.defineProperty(window, 'getComputedStyle', {
    writable : true,
    value    : jest.fn((elt, pseudoElt) => {
        return originalGetComputedStyle(elt);
    })
});