const modal = document.querySelector("#modal");
const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");

openButton.addEventListener("click", () => {
  modal.show();
});

closeButton.addEventListener("click", () => {
  modal.close();
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
    buttonLight.textContent = "Turn off";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn On";
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
    buttonLight.textContent = "Turn off";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn On";
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


function hallLligtBulb() {
  var image = document.getElementById("hallLight");
  var buttonLight = document.getElementById("hallLightBtn");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
    buttonLight.textContent = "Turn off";
  } else {
    image.src = "pic_bulbon.gif";
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
    buttonLight.textContent = "Turn off";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn On";
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
    buttonLight.textContent = "Turn off";
  } else {
    image.src = "pic_bulbon.gif";
    buttonLight.textContent = "Turn On";
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