import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import jspreadsheet from 'jspreadsheet-ce';

const data = [
  ['1','1', 1],
  [0,0, '0'],
];

const table = jspreadsheet(document.getElementById('spreadsheet'), {
  data:data,
  columns: [
      { type: 'text', title:'Type Text', width:100 },
      { type: 'numeric', title:'Type Numeric', width:100, },
      { type: 'number', title: 'Type number', width:100 }
  ],
  autoCasting: false,
});

console.log(table.getConfig());
console.log(table.getData());