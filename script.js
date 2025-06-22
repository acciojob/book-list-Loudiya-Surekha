 const abc = (event) =>{
      const title = document.getElementById('title').value.trim();
      const author = document.getElementById('author').value.trim();
      const isbn = document.getElementById('isbn').value.trim();

      if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
        return;
      }
      let row = document.createElement('tr');
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
      `;
      document.getElementById('book-list').appendChild(row);
      document.getElementById('book-form').reset();
        }
    document.getElementById('book-list').addEventListener('click', function(e) {
      if (e.target.classList.contains('delete')) {
        e.target.closest('tr').remove();
      }
    });
