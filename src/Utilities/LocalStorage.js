const getItemFromLS = () => {
  const storedItem = localStorage.getItem("cart");
  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    return [];
  }
};
const addToLs = (id) => {
  const cart = getItemFromLS();
  cart.push(id);

  saveToLS(cart);
};
const saveToLS = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeItemFromLS = (id) => {
  const cart = getItemFromLS();
  // removing the specific id
  const remaining = cart.filter((idx) => idx !== id);
  saveToLS(remaining);
};

// current

const getItemFromCurrent = () => {
  const storedItem = localStorage.getItem("current");
  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    return [];
  }
};

const addToCurrent = (id) => {
  const current = getItemFromCurrent();
  current.push(id);

  saveToCurrent(current);
};
const saveToCurrent = (current) => {
  localStorage.setItem("current", JSON.stringify(current));
};

// total time
const getItemFromTime = () => {
  const storedItem = localStorage.getItem("time");
  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    return [];
  }
};
const addToTime = (preparingtime) => {
  const time = getItemFromTime();
  time.push(preparingtime);

  saveToTime(time);
};
const saveToTime = (time) => {
  localStorage.setItem("time", JSON.stringify(time));
};
// calory
const getItemFromCal = () => {
  const storedItem = localStorage.getItem("calories");
  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    return [];
  }
};
const addToCal = (calory) => {
  const calories = getItemFromCal();
  calories.push(calory);

  saveToCal(calories);
};
const saveToCal = (calories) => {
  localStorage.setItem("calories", JSON.stringify(calories));
};

export {
  addToLs,
  getItemFromLS,
  removeItemFromLS,
  getItemFromCurrent,
  addToCurrent,
  addToTime,
  getItemFromTime,
  addToCal,
  getItemFromCal,
};
