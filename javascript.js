function myFunction(a) {
    if (a.matches) { // If media query matches
      mapDiv.style.width = "400px";
    } else {
        mapDiv.style.width = "300px";
    }
  }
  

  function myFunction(b) {
    if (b.matches) { // If media query matches
      mapDiv.style.width = "700px";
    } else {
        mapDiv.style.width = "300px";
    }
  }

  
  function myFunction(c) {
    if (c.matches) { // If media query matches
      mapDiv.style.width = "900px";
    } else {
        mapDiv.style.width = "300px";
    }

    
  function myFunction(d) {
    if (d.matches) { // If media query matches
      mapDiv.style.width = "1100px";
    } else {
        mapDiv.style.width = "300px";
    }
  var a = window.matchMedia("(min-width: 480px)")
  myFunction(a) // Call listener function at run time
  a.addListener(myFunction) // Attach listener function on state changes

  var b = window.matchMedia("(min-width: 768px)")
  myFunction(b) // Call listener function at run time
  b.addListener(myFunction) // Attach listener function on state changes


  var c = window.matchMedia("(min-width: 1024px)")
  myFunction(c) // Call listener function at run time
  c.addListener(myFunction) // Attach listener function on state changes


  var d = window.matchMedia("(min-width: 1200px)")
  myFunction(d) // Call listener function at run time
  d.addListener(myFunction) // Attach listener function on state changes
