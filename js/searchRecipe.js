document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchTerm');
    

    if (searchInput) {
        searchInput.value = localStorage.getItem("searchWord") || "";

        searchInput.addEventListener('input', function() {
        localStorage.setItem("searchWord", this.value);
      });
    }
  });

  const btn = document.querySelector('.Search_btn');

 

  btn.onclick = function() {
    window.location.href = 'recepies.html#search';
    searchInput.value = localStorage.getItem("searchWord");
  };

