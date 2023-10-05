let blogTitle;
let blogText;
let saveBtn;
// let newNoteBtn;
let blogList;

if (window.location.pathname === '/blog') {
  blogTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  noteList = document.querySelectorAll('.list-container .list-group');
}