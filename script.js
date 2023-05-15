const modal = document.querySelector("#modal");
const modal1 = document.querySelector("#modal1");

const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");

const openButton1 = document.querySelector(".open-button1");
const closeButton1 = document.querySelector(".close-button1");

openButton.addEventListener("click", () => {
  modal.show();
});

closeButton.addEventListener("click", () => {
  modal.close();
});
openButton1.addEventListener("click", () => {
  modal1.show();
});

closeButton1.addEventListener("click", () => {
  modal1.close();
});

const triggers = document.querySelectorAll(".trigger");
const modalWrapper = document.querySelector(".modal__wrapper");
const closeBtn = document.querySelector(".close");

triggers.forEach(trigger => {
  trigger.addEventListener("click", function () {
    openModal();
  });
});

closeBtn.addEventListener("click", function () {
  closeModal();
});

modalWrapper.addEventListener("click", function (e) {
  if (e.target !== this) return;
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

function openModal() {
  modalWrapper.classList.add("active");
}

function closeModal() {
  modalWrapper.classList.remove("active");
}



//rooms acitvity


//for room Light pop ups 
function showDialogBedRoom() {
  document.getElementById("dialog").style.display = "block";
}

function hideDialogBedRoom() {
  document.getElementById("dialog").style.display = "none";
}
function showDialogKitchen() {
  document.getElementById("dialog1").style.display = "block";
}

function hideDialogredKitchen() {
  document.getElementById("dialog1").style.display = "none";
}
function showDialogredHall() {
  document.getElementById("dialog2").style.display = "block";
}

function hideDialogredHall() {
  document.getElementById("dialog2").style.display = "none";
}
function showDialogredFrontDoor() {
  document.getElementById("dialog3").style.display = "block";
}

function hideDialogredFrontDoor() {
  document.getElementById("dialog3").style.display = "none";
}
//Bed Room Details
function changeImageBedRoomBulb() {
  var image = document.getElementById("bedRoomBulb");
  var buttonLight = document.getElementById("bedRoomBulbBtn");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
    buttonLight.textContent = "Turn On";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn Off";
  }
}

function changeImageBedRoomFan() {
  var imageFan = document.getElementById("bedRoomFan");
  var buttonFan = document.getElementById("bedRoomFanBtn");

  if (imageFan.src.match("fan_off.png")) {
    imageFan.src = "fan_on.gif";
    buttonFan.textContent = "Turn off";
  } else {
    imageFan.src = "fan_off.png";
    buttonFan.textContent = "Turn on";
  }
}

//Kitchen Details

function kichenLight() {
  var image = document.getElementById("kitchenBulb");
  var buttonLight = document.getElementById("kitchenLightBtn");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
    buttonLight.textContent = "Turn On";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn Off";
  }
}

function kitchenFan() {
  var imageFan = document.getElementById("kitchenFan");
  var buttonFan = document.getElementById("kitchenFanBtn");

  if (imageFan.src.match("fan_off.png")) {
    imageFan.src = "fan_on.gif";
    buttonFan.textContent = "Turn off";
  } else {
    imageFan.src = "fan_off.png";
    buttonFan.textContent = "Turn on";
  }
}

//Hall Details


function hallTv() {
  var image = document.getElementById("hallTv");
  var buttonLight = document.getElementById("hallTvBtn");
  if (image.src.match("tv_off.jpg")) {
    image.src = "tv_on.gif";
    buttonLight.textContent = "Turn Off";
  } else {
    image.src = "tv_off.jpg";
    buttonLight.textContent = "Turn On";
  }
}

function hallFan() {
  var imageFan = document.getElementById("hallFan");
  var buttonFan = document.getElementById("hallFanBtn");

  if (imageFan.src.match("fan_off.png")) {
    imageFan.src = "fan_on.gif";
    buttonFan.textContent = "Turn off";
  } else {
    imageFan.src = "fan_off.png";
    buttonFan.textContent = "Turn on";
  }
}


// Front Door Details


function frontDoorBulb() {
  var image = document.getElementById("frontDoorBulb");
  var buttonLight = document.getElementById("frontDoorBulbBtn");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
    buttonLight.textContent = "Turn On";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn Off";
  }
}

function frontDoorFan() {
  var imageFan = document.getElementById("frontDoorFan");
  var buttonFan = document.getElementById("frontDoorFanBtn");

  if (imageFan.src.match("fan_off.png")) {
    imageFan.src = "fan_on.gif";
    buttonFan.textContent = "Turn off";
  } else {
    imageFan.src = "fan_off.png";
    buttonFan.textContent = "Turn on";
  }
}



// others part or references
function kichenLight() {
  var image = document.getElementById("kitchenBulb");
  var buttonLight = document.getElementById("kitchenLightBtn");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
    buttonLight.textContent = "Turn On";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn Off";
  }
}

function kitchenFan() {
  var imageFan = document.getElementById("kitchenFan");
  var buttonFan = document.getElementById("kitchenFanBtn");

  if (imageFan.src.match("fan_off.png")) {
    imageFan.src = "fan_on.gif";
    buttonFan.textContent = "Turn off";
  } else {
    imageFan.src = "fan_off.png";
    buttonFan.textContent = "Turn on";
  }
}