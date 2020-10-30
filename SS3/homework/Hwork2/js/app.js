import {Document} from "./Document.js";
import {EBook} from "./EBook.js";
import {HardCopy} from "./HardCopy.js";
import {DocumentCase} from "./DocumentCase";

let DocumentCase1 = new DocumentCase('0501', 'I love you', Documents, 'Nguyen Van Liem', '05-01-2020');
let EBook1 = new EBook('2000', 'Hello', 'liem0501', 200, '01-01-2015');
let EBook2 = new EBook('2020', 'Goodbye', 'liem0501', 220, '01-01-2016');
let HardCopy1 = new HardCopy('2021', 'See you again 1', 'liem0501',230, '01-01-2017', 'abc123');
let HardCopy2 = new HardCopy('2022', 'See you again 2', 'liem0501',230, '01-01-2017', 'abc123');
let Documnets = [EBook1, EBook2];

DocumentCase1.addDocument(EBook1);
DocumentCase1.showDocuments();

