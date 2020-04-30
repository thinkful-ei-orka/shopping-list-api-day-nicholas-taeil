const items = [];
let hideCheckeditems = false;
let error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (itemObj) {
  try {
    this.items.push(itemObj);
  } catch (e) {
    error = e.message;
    console.log(error);
  }
};

const findAndUpdate = function (id, newData) {
  try {
    let itemFound = this.items.find((item) => item.id === id);
    Object.assign(itemFound, newData);
  } catch (e) {
    error = e.message;
    console.log(error);
  }
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  error,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};
