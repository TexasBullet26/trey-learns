/**********************************************************************************
 *  Iterating over DOM collections like `NodeList`: the following example         *
 *  adds a `read` class to paragraphs that are direct descendants of an article:  *
 *                                                                                *
 *  NOTE:                                                                         *
 *    This will only work in platforms that have                                  *
 *    implemented `NodeList.prototype[Symbol.iterator]`                           *
 **********************************************************************************/
let articleParagraphs = document.querySelectorAll('article > p');

for (let paragraph of articleParagraphs) {
    paragraph.classList.add('read');
}
/*********************************************************************************************
 *  NOTE:                                                                                    *
 *    `NodeList`: NodeList objects are collections of nodes, usually returned by             *
 *    properties such as `Node.childNodes` and methods such as `document.querySelectorAll()  *
 *********************************************************************************************/
