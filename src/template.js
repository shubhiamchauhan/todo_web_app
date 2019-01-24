const html = {
  homepage:(name) => `<!DOCTYPE html>
  <html>
    <head>
      <title>TODO</title>
      <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
      <script src="main.js"></script>
    </head>
    <body class="mainPage">
      <div class="titleBar">
        <div class="appName">TODO</div>
        <div class="userName">
          ${name} <button class="logOut">Logout</button>
        </div>
      </div>
      <div class="listContainer">
        <h3>Todo List</h3>
        <div class="list">
          <ul>
            <a href=""></a>
            <li>movies</li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  `
};

module.exports = html;