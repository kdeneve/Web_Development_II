'use strict';
class Sticky {
  #id;
  #note;
  #color;

  constructor(note, color) {
    this.#id = 'sticky_' + Math.random().toString(36).substring(2);
    this.note = note;
    this.color = color;
  }

  get id() {
    return this.#id;
  }
  get note() {
    return this.#note;
  }
  get color() {
    return this.#color;
  }
  set note(value) {
    this.#note = value;
  }
  set color(value) {
    this.#color = value;
  }
  toJSON() {
    return {
      id: this.id,
      note: this.note,
      color: this.color,
    };
  }
}

class StickiesComponent {
  #storage;
  #stickies = [];
  constructor(storage) {
    this.#storage = storage;
  }
  get storage() {
    return this.#storage;
  }
  get stickies() {
    return this.#stickies;
  }

  addSticky(note, color) {}
  deleteSticky(key) {}
  clearStickies() {}
  getStickiesFromStorage() {}
  setStickiesInStorage() {}
  toHTML() {
    document.getElementById('stickies').innerHTML = '';
    this.#stickies.map((sticky) => {
      let li = document.createElement('li');
      li.setAttribute('id', sticky.id);
      li.style.backgroundColor = sticky.color;
      const span = document.createElement('span');
      span.className = 'sticky';
      span.appendChild(document.createTextNode(sticky.note));
      li.appendChild(span);
      document.getElementById('stickies').appendChild(li);
      li.onclick = () => {
        this.deleteSticky(li.id);
      };
    });
  }
  storageEventHandler(event) {
    alert('Storage has been changed on another page');
    this.getStickiesFromStorage();
    this.toHTML();
  }
}

function init() {
  const stickiesComponent = new StickiesComponent(localStorage);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');

  if (!stickiesComponent.storage) {
    alert('browser ondersteunt geen storage');
    addButton.disabled = true;
    clearButton.disabled = true;
    return;
  }
  stickiesComponent.getStickiesFromStorage();
  stickiesComponent.toHTML();

  addButton.onclick = function () {
    const noteText = document.getElementById('notetext');
    const noteColor = document.getElementById('notecolor');
    stickiesComponent.addSticky(noteText.value, noteColor.value);
    noteText.value = '';
  };

  clearButton.onclick = function () {
    stickiesComponent.clearStickies();
  };
}

window.onload = init;

