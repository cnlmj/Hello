
step1(function(res1) {
  step2(function(res2) {
    step3(function(res3) {
      // ...
    });
  });
});

E.on("evt", g);
function f(){
    setTimeout(function(){
        E.trigger("evt");
    })
}
