const userDetails = document.getElementById("userDetails");

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("id");

if (!userId) {
  window.location.href = "result.html";
}

fetch(`https://reqres.in/api/users/${userId}`)
  .then((response) => response.json())
  .then((data) => {
    const user = data.data;
    const li1 = document.createElement("li");
    const text1 = document.createTextNode(`ID: ${user.id}`);
    li1.appendChild(text1);

    const li2 = document.createElement("li");
    const text2 = document.createTextNode(`Email: ${user.email}`);
    li2.appendChild(text2);

    const li3 = document.createElement("li");
    const text3 = document.createTextNode(
      `Name: ${user.first_name} ${user.last_name}`
    );
    li3.appendChild(text3);

    userDetails.appendChild(li1);
    userDetails.appendChild(li2);
    userDetails.appendChild(li3);
  });
