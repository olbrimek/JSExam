// Task 1: Search for tag names
const task1EL = document.querySelectorAll('.sample_class');

function getTag(elements) {
    const tagsArray = [];
    elements.forEach(element => {
        tagsArray.push(element.tagName);
    });
    return tagsArray;
}

console.log(getTag(task1EL));

// Task 2: Search for class names
const task2EL = document.getElementById('sample_id');

function getClass(element) {
    const classArray = [];
    if (element) {
        classArray.push(...element.classList);  // Get all classes of the element
    }
    return classArray;
}

console.log(getClass(task2EL));

// Task 3: Search for text
const task3EL = document.querySelectorAll('.sample_class_2 li');

function getInnerText(elements) {
    const textArray = [];
    elements.forEach(element => {
        textArray.push(element.innerText);
    });
    return textArray;
}

console.log(getInnerText(task3EL));

// Task 4: Search for link addresses
const task4EL = document.querySelectorAll('a');

function getAddress(elements) {
    const addressArray = [];
    elements.forEach(element => {
        if (element.href) {
            addressArray.push(element.href);
        }
    });
    return addressArray;
}

console.log(getAddress(task4EL));

// Task 5: Search for child tags
const task5EL = document.querySelector('.sample_class_3');

function getChildTags(parentElement) {
    const childTagsArray = [];
    if (parentElement) {
        const children = parentElement.children;
        Array.from(children).forEach(child => {
            childTagsArray.push(child.tagName);
        });
    }
    return childTagsArray;
}

console.log(getChildTags(task5EL));
