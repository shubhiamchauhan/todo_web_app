const { Handler } = require("./framework");
const app = new Handler();

const {
  readCookie,
  readBody,
  logRequest,
  serveFile,
  renderUserHomePage,
  createNewAccount,
  saveTodoList,
  serveLoginPage,
  handleLogout,
  serveSignupPage,
  serveHomePage,
  showTodoList,
  renderListPage,
  serveItems,
  saveTodoItem,
  renderEditListPage,
  editList,
  deleteList,
  renderEditItemPage,
  editItem,
  deleteItem,
  toggleListStatus,
  toggleItemStatus
} = require("./todoController");

app.use(readBody);
app.use(logRequest);
app.use(readCookie);
app.get("/", serveHomePage);
app.get("/signup", serveSignupPage);
app.get("/login", serveLoginPage);
app.get("/logout", handleLogout);
app.get("/showList", showTodoList);
app.get(/\/list\/view/, renderListPage);
app.get(/\/list\/edit/, renderEditListPage);
app.get(/\/item\/edit/, renderEditItemPage);
app.get(/\/list\/delete/, deleteList);
app.get(/\/item\/delete/, deleteItem);
app.post(/\/list\/view/, serveItems);
app.post(/\/list\/edit/, editList);
app.post(/\/item\/edit/, editItem);
app.post("/", renderUserHomePage);
app.post("/toggleListStatus", toggleListStatus);
app.post("/toggleItemStatus", toggleItemStatus);
app.post("/createNewAccount", createNewAccount);
app.post("/addList", saveTodoList);
app.post("/addItem", saveTodoItem);
app.use(serveFile);

module.exports = app.handleRequest.bind(app);
