import { got } from 'got';
const handleReceivedResponse = (response) => {
  console.log(JSON.parse(response.body));
}

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    callback(response);
  });
}

fetchRepoInfo('sinatra/sinatra', handleReceivedResponse);