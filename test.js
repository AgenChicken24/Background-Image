// change current directory to repo directory in local
const simpleGit = require('simple-git')();
const shellJs = require('shelljs');
const simpleGitPromise = require('simple-git/promise')()
shellJs.cd('D:/Github Copyes/Background-Image');
// Repo name
const repo = 'master';  //Repo name
// User name and password of your GitHub
const userName = 'AgenChicken24';
const password = '123456@DoG!';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// add local git config like username and email
simpleGit.addConfig('user.email','balvinder294@gmail.com');
simpleGit.addConfig('user.name','Balvinder Singh');
// Add remore repo url as origin to repo
// simpleGitPromise.addRemote('origin',gitHubUrl);
// Add all files for commit
simpleGitPromise.add('New Text Document.txt')
   .then(
      (addSuccess) => {
         console.log(addSuccess);
      }, (failedAdd) => {
         console.log('adding files failed');
   });
// Commit files as Initial Commit
simpleGitPromise.commit('Intial commit by simplegit')
   .then(
      (successCommit) => {
      console.log(successCommit);
   }, (failed) => {
      console.log('failed commmit');
});
// Finally push to online repository
simpleGitPromise.push('origin','master')
   .then((success) => {
      console.log('repo successfully pushed');
   },(failed)=> {
      console.log('repo push failed');
})