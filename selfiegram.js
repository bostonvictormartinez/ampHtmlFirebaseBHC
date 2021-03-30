
$(document).ready(function(){
    var firebaseConfig = {
        apiKey: "",
        authDomain: "selfiebhc.firebaseapp.com",
        databaseURL: "https://selfiebhc.firebaseio.com",
        projectId: "",
        storageBucket: ".appspot.com",
        messagingSenderId: "",
        appId: ""
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      $(".register form").on("submit",function(event){
          event.preventDefault();
          var email=$(".register .email").val();
          var password=$(".register .password").val();

          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(function(user){
              console.log(user);
              alert("registered");

          })
          .catch(function(err){
              alert("nope");
          });
      });

      $(".login form").on("submit", function(event){
          event.preventDefault();

          var email=$(".login .email").val();
          var password=$(".login .password").val();

          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function(user){
              console.log(user);
              alert("logged in");
          })
          .catch(function(err){
              console.log(err);
              alert("that is weird")
          });
        });

        /*  firebase.auth().onAuthStateChanged(function(user){
              if(user){
                  alert("welcome back");
              }else{
                  console.log("no user")
              }
          
      })*/

      firebase.auth().onAuthStateChanged(function(user){
          $(".todo form").off();
          
          if(user){
              $(".todo form").on("submit", function(event){
                event.preventDefault();
                var todo =$(".todo .text").val();
                firebase.database().ref("/users/"+user.uid).child("/todos").push(todo);
                alert("Will do, you can add another if you like. See you at your detail.")
              })
          }else{
              $(".todo form").on("submit", function(event){
                  alert("please log in");
              })
          }
      });

      
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });


});

var lnkLogOut = document.querySelector("#lnkLogOut");

lnkLogOut.addEventListener("click", function() {
    firebase.auth().signOut();
    alert("signed out");
});



var order=[];


//listening to cancel
window.addEventListener("DOMContentLoaded", function(){
    updateCart();
    var lnkCancel=document.querySelector("#lnkStartOver");
    lnkCancel.addEventListener("click", function(){
        var areYouSure=confirm("Are you sure?");
        if(areYouSure){
            order=[];
            updateCart();

        }
    });



    
    //listen for click
    var extrasMenus=document.querySelectorAll(".extrasMenu");
    for(var extrasMenu of extrasMenus){
        extrasMenu.addEventListener("click", function(){
            var title=this.dataset.title;
            //push to cart
            order.push(title);
            updateCart();
        });
    }
});

function updateCart(){
    var html="";
    for(var extrasMenu of order){
        html+="<li>"+extrasMenu+"</li>";
    }
   var ul= document.querySelector("#cart ul");
   ul.innerHTML=html;

   var cart=document.querySelector("#cart");
   if(order.length==0){
       cart.style.backgroundColor="blue";
   }else{
       cart.style.backgroundColor="orange";
   }
};






document.addEventListener("DOMContentLoaded", function(){

});

document.addEventListener("DOMContentLoaded", function(){
    var numberOfVisits=localStorage.getItem("visits");
    var message=document.querySelector("#message");
    if(numberOfVisits){
        localStorage.setItem("visits", numberOfVisits+1);
    }else{
        message.innerHTML="Welcome";
        localStorage.setItem("visits", "1");
    }
    var inputs=document.querySelectorAll(".extrasMenu, .fullMenu");
    for(var input of inputs){
        var storedValue=localStorage.getItem(input.id);
        if(storedValue){
            input.value=storedValue;
        }
        input.addEventListener("change", function(){
            localStorage.setItem(this.id, this.value);
        });
    }
});







window.addEventListener("DOMContentLoaded", function(){
    updateCart();
   

    //listen for click
    var interiorMenus=document.querySelectorAll(".interiorMenu");
    for(var interiorMenu of interiorMenus){
        interiorMenu.addEventListener("click", function(){
            var title=this.dataset.title;
            //push to cart
            order.push(title);
            updateCart();
        });
    }
});

function updateCart(){
    var html="";
    for(var interiorMenu of order){
        html+="<li>"+interiorMenu+"</li>";
    }
   var ul= document.querySelector("#cart ul");
   ul.innerHTML=html;

   var cart=document.querySelector("#cart");
   if(order.length==0){
       cart.style.backgroundColor="blue";
   }else{
       cart.style.backgroundColor="orange";
   }
}









window.addEventListener("DOMContentLoaded", function(){
    updateCart();
   

    //listen for click
    var exteriorMenus=document.querySelectorAll(".exteriorMenu");
    for(var exteriorMenu of exteriorMenus){
        exteriorMenu.addEventListener("click", function(){
            var title=this.dataset.title;
            //push to cart
            order.push(title);
            updateCart();
        });
    }
});

function updateCart(){
    var html="";
    for(var exteriorMenu of order){
        html+="<li>"+exteriorMenu+"</li>";
    }
   var ul= document.querySelector("#cart ul");
   ul.innerHTML=html;

   var cart=document.querySelector("#cart");
   if(order.length==0){
       cart.style.backgroundColor="blue";
   }else{
       cart.style.backgroundColor="orange";
   }
}








window.addEventListener("DOMContentLoaded", function(){
    updateCart();
  

    //listen for click
    var fullMenus=document.querySelectorAll(".fullMenu");
    for(var fullMenu of fullMenus){
        fullMenu.addEventListener("click", function(){
            var title=this.dataset.title;
            //push to cart
            order.push(title);
            updateCart();
        });
    }
});

function updateCart(){
    var html="";
    for(var fullMenu of order){
        html+="<li>"+fullMenu+"</li>";
    }
   var ul= document.querySelector("#cart ul");
   ul.innerHTML=html;

   var cart=document.querySelector("#cart");
   if(order.length==0){
       cart.style.backgroundColor="blue";
   }else{
       cart.style.backgroundColor="orange";
   }
}
