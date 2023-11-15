

export function courseMenu() {
    return {
        routs: [
            { pageRoute: "tutorial-page", name: "Tutorial" },
            /** Обычный роут */
            { pageRoute: "page_1", name: "Page 1" },
            { pageRoute: "page_2", name: "Page 2" },
        ],
    }
}

export function courseGlossary() {
    return {
        data: [
            { "title": "Array", "text": "A collection of elements of the same type stored in contiguous memory locations." },
            { "title": "Table", "text": "A data structure consisting of rows and columns, where each column contains data of the same type." },
            { "title": "List", "text": "A collection of elements of different types, stored in a non-contiguous memory location." },
            { "title": "Dictionary", "text": "A collection of key-value pairs, where each key is unique and maps to a value." },
            { "title": "Set", "text": "A collection of unique elements, where the order of elements is not guaranteed." },
            { "title": "Stack", "text": "A data structure that follows the Last-In-First-Out (LIFO) principle." },
            { "title": "Queue", "text": "A data structure that follows the First-In-First-Out (FIFO) principle." },
            { "title": "Tree", "text": "A hierarchical data structure consisting of nodes, where each node has a parent and zero or more children." },
            { "title": "Graph", "text": "A non-linear data structure consisting of nodes and edges, where each edge connects two nodes." },
            { "title": "Hash Table", "text": "A data structure that maps keys to values, using a hash function to compute an index into an array of buckets." }
        ],
    }
}

import file_1 from "/downloads/questions.pdf"

export function courceDownload() {
    return {
        data: [
            {
                name: 'ВОПРОСЫ ДЛЯ ВЫЯВЛЕНИЯ ПОТРЕБНОСТЕЙ КЛИЕНТА',
                link: file_1,
                size: '7.1 Mb, PDF'
            },
        ]
    }
}