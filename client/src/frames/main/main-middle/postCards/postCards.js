// IMPORT ALL THE JS VARIABLES
import { postCards } from "@/js/database.js";

//SET THE POST CARDS FOR POST SECTION
const mainMiddle = document.querySelector(".main-middle");

postCards.forEach((element, index) => {
  const template = document.getElementById("template");
  const newPostCard = template.cloneNode(true);

  // set the profile photo
  const profileImg = newPostCard.querySelector(".post-information img");
  profileImg.src = postCards[index].profile.src.replace("./src", "");

  //set the poster name
  const posterName = newPostCard.querySelector(
    ".post-information .post-status .poster-name"
  );
  posterName.textContent = postCards[index].profile.name;

  //set the post location and time
  const postLocationTime = newPostCard.querySelector(
    ".post-information .post-status .post-location-time small"
  );
  postLocationTime.textContent = `${postCards[index].profile.position}, ${postCards[index].profile.time} minutes ago `;

  //set the post picture
  const postPicture = newPostCard.querySelector(".post-picture img");
  postPicture.src = postCards[index].picture.img_src.replace("./src", "");

  //SET THE POST COMMENTS
  //set the who like profile
  const whoLikeProfile = newPostCard.querySelectorAll(
    ".who-like .who-like__profile img"
  );
  whoLikeProfile.forEach((element, index) => {
    element.src = postCards[index].comment.img_src_list[index].replace(
      "./src",
      ""
    );
  });

  //set who-like description
  const whoLikeDescription = newPostCard.querySelector(
    ".who-like .who-like__description"
  );
  const first_people_name = postCards[index].comment.first_people_name;
  const like_peoples_number = postCards[index].comment.like_peoples_number;
  whoLikeDescription.textContent = `Liked by ${first_people_name} and ${like_peoples_number} others`;

  //set the comment info
  const commentInfo = newPostCard.querySelector(".comment-info");
  commentInfo.textContent = postCards[index].comment.comment_info;

  // set the other views option
  const otherViews = newPostCard.querySelector(".other-views");
  const viewNumber = postCards[index].comment.view_number;
  otherViews.textContent = `View all ${viewNumber} comments`;

  newPostCard.id = "";

  newPostCard.style.display = "flex";
  newPostCard.classList.add("posts");
  mainMiddle.appendChild(newPostCard);
});
