// Fetch data from API
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => {
    // Create list view
    const listView = document.createElement('ul');
    data.data.forEach(user => {
      // Create list item
      const listItem = document.createElement('li');
      listItem.innerText = `${user.first_name} ${user.last_name}`;

      // Add click event listener to show detailed view of user
      listItem.addEventListener('click', () => {
        // Redirect to detailed view page with user id
        window.location.href = `detailedView.html?userId=${user.id}`;
      });

      // Add list item to list view
      listView.appendChild(listItem);
    });

    // Add list view to page
    document.body.appendChild(listView);

    // Add logout button
    const logoutButton = document.createElement('button');
    logoutButton.innerText = 'Logout';
    logoutButton.addEventListener('click', () => {
      // Clear local storage and redirect to login page
      localStorage.clear();
      window.location.href = 'login.html';
    });

    // Add logout button to page
    document.body.appendChild(logoutButton);
  })
  .catch(error => {
    console.error(error);
  });