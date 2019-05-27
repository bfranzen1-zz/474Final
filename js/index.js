

// load data and make scatter plot after window loads
window.onload = function() {
    
    // load country codes for dropdown and title
    d3.json("../js/neighborhoods.json")
        .then((data) => {
            console.log(data);
      });

  }
