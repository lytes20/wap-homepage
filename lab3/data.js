let data = [];
export function get_items() {
  return data;
}
export function add_item(new_item) {
  // add item (if id does not exist)
  // return true if item is added successfully, false otherwise
  const duplicateItem = data.find((item) => item.id === new_item.id);
  if (duplicateItem) {
    return false;
  } else {
    data.push(new_item);
    return true;
  }
}
export function update_item_title_by_id(id, new_title) {
  // update the title (if id exist)
  // return true if item is update successfully, false otherwise
  let response = false;
  data.forEach((item) => {
    if (item.id === id) {
      item.title = new_title;
      response = true;
    }
  });

  return response;
}
export function delete_item_by_id(id) {
  // delete the item (if id exist)
  // return true if item is deleted successfully, false otherwise
  let response = false;
  data = data.filter((item) => {
    if (item.id === id) {
      response = true;
      return false;
    } else {
      return true;
    }
  });
  return response;
}
export function get_item_title_by_id(id) {
  // return the item title by id (if id exist)
  const search = data.find((item) => item.id === id);
  if (search) {
    return search.title;
  }
  return "404 - Title Not Found";
}
