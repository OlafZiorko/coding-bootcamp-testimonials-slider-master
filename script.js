const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const userImage = document.querySelector(".user--img");
const userName = document.querySelector(".user--name");
const userDescription = document.querySelector(".user--description");
const userJobDescription = document.querySelector(".user--jobDescription");
let count = 0;
const userArr = [
  {
    userName: "John Tarkpor",
    userJobDescription: "Junior Front-end Developer",
    userDescription: `" If you want to lay the best foundation possible I’d recommend taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer." `,

    userImage: "./images/image-john.jpg",
  },
  {
    userName: "Tanya Sinclair",
    userJobDescription: "UX Engineer",
    userDescription: ` " I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future." `,
    userImage: "./images/image-tanya.jpg",
  },
];
//Functions
function showUser(arr, count) {
  userDescription.textContent = userArr[count].userDescription;
  userJobDescription.textContent = userArr[count].userJobDescription;
  userName.textContent = userArr[count].userName;
  userImage.setAttribute("src", userArr[count].userImage);
}
// setInterval(nextUser, 5000);

function prevUser() {
  count--;
  count <= userArr.length ? (count = 1) : null;
  showUser(userArr, count);
}
function nextUser() {
  count++;
  count >= userArr.length ? (count = 0) : null;
  showUser(userArr, count);
}

// onLoad
showUser(userArr, count);

btnNext.addEventListener("click", nextUser);
btnPrev.addEventListener("click", prevUser);
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    nextUser();
  } else if (e.key == "ArrowLeft") {
    prevUser();
  }
});
