let queries = [];

function fahimAZAD() {
  const queryInput = document.getElementById('queryInput').value;
  if (queryInput.trim() === '') {
    alert('Please enter a query.');
    return;
  }

  const newQuery = {
    text: queryInput,
    replies: []
  };

  queries.push(newQuery);
  displayQueries();
  document.getElementById('queryInput').value = '';
}

function replyToQuery(queryIndex) {
  const replyText = prompt('Enter your reply:');
  if (replyText) {
    queries[queryIndex].replies.push(replyText);
    displayQueries();
  }
}

function displayQueries() {
  const queryContainer = document.getElementById('queries');
  queryContainer.innerHTML = '';

  queries.forEach((query, index) => {
    const queryDiv = document.createElement('div');
    queryDiv.className = 'query';
    queryDiv.textContent = query.text;

    const replyButton = document.createElement('button');
    replyButton.textContent = 'Reply';
    replyButton.onclick = function() {
      replyToQuery(index);
    };

    queryDiv.appendChild(replyButton);

    query.replies.forEach(reply => {
      const replyDiv = document.createElement('div');
      replyDiv.className = 'reply';
      replyDiv.textContent = reply;
      queryDiv.appendChild(replyDiv);
    });

    queryContainer.appendChild(queryDiv);
  });
}