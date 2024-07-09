const myPetRock = {
  username: "",
  image: "images/rock.png",
  resetImage: function () {
    this.image = "images/rock.png";
  },
};

export const greetUser = function () {
  alert("Hello I am your pet rock");
  touchRock();
};

export const touchRock = function () {
  if (myPetRock.username == "") {
    myPetRock.username = prompt("What is your name?");
  }
  alert (`I like the attention, ${myPetRock.username}. Thank you.`);
  myPetRock.image = "images/rock_happy.png"
  showRock();
  myPetRock.resetImage();
  setTimeout(showRock, 2 * 1000);
};


const showRock = function() {
  document.getElementById("rockImg").src = myPetRock.image;
};
