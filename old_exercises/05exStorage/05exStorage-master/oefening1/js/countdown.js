class Milestone {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  get name() {
    return this._name;
  }
  get date() {
    return this._date;
  }

  set name(value) {
    this._name = value;
  }
  set date(value) {
    this._date = value;
  }
}

class MilestonesComponent {
  constructor(storage) {
    this._storage = storage;
    this._milestones = [];
  }

  get storage() {
    return this._storage;
  }

  get milestones() {
    return this._milestones;
  }

  calculateDiffDays(d) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.ceil(Math.abs((new Date().getTime() - new Date(d).getTime()) / oneDay));
  }

  addMilestone(name, date) {}

  deleteMilestone(ind) {}

  clearMilestones() {}

  toHTML() {
    document.getElementById('overview').innerHTML = '';
    this._milestones.map((m, ind) => {
      const li = document.createElement('li');
      li.setAttribute('class', 'list-group-item col-sm-8');
      li.appendChild(
        document.createTextNode(
          this.calculateDiffDays(m.date) + ' days left until ' + m.name
        )
      )
      const btn = document.createElement('button');
      btn.setAttribute('class', 'btn btn-default');
      btn.setAttribute('style', 'margin-left:20px')
      btn.innerText = "-";
      btn.addEventListener('click', () => {
        this.deleteMilestone(ind)
      });
      li.appendChild(btn);
      document.getElementById('overview').appendChild(li);
    })
  }


  getMilestonesFromStorage() {}

  setMilestonesInStorage() {}

}

function init() {
  const milestonesComponent = new MilestonesComponent(this.localStorage);
  const addButton = document.getElementById('add');
  const clearButton = document.getElementById('clear');
  const nameText = document.getElementById('name');
  const dateText = document.getElementById('date');

  addButton.onclick = () => {};

  clearButton.onclick = () => {};


}

window.onload = init;