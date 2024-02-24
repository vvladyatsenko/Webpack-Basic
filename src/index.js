import * as $ from 'jquery';
import json from '../assets/data.json';
import Post from '@/post';
import logo from '../assets/logo.svg';
import xml from '../assets/data.xml';
import csv from '@/data.csv';
import '@/css/style.css';

const post = new Post('Webpack Post Title', logo);

console.log('Post to string:', post.toString());

$('pre').html(post.toString());

console.log('JSON:', json);
console.log('Logo:', logo);
console.log('XML:', xml);
console.log('CSV:', csv);
