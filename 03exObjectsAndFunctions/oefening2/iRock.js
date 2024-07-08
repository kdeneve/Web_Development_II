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
    alert`I like the attention, ${myPetRock.username}. Thank you.`;
    //alert(myPetRock.username);
  }
};
