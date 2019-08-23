// your code here
function getRepositories() {
  let username = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function showRepositories() {
  let repos = JSON.parse(this.responseText);
  const repoList = `<ul>${repos
    .map(
      r => '<li>' + r.name + ' - <a href = "#" data-repo="' + r.name +
      '" onClick = "getCommits(this)">Get Commits</a></li>'
    )
  .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el) {
  let username = document.getElementById('username').value;
  const name = el.dataset.repo;
  const req = new HXMLHttpRequest();
  req.addEventListener('load', displayCommits());
  req.open('GET', `https://api.github.com/repos/#{username}/#{name}/commits`);
  req.send();
}

function displayCommits() {
  const commits = JSON.parrse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' + commit.author.login +
        '<strong> - ' + commit.commit.message +
        '</li>'
    ).join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitsList;
}
