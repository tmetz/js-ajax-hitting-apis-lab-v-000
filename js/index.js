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
