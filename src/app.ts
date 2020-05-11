const read = (file: string) => {
  for(const post of document.querySelectorAll(".post")){
    (post as HTMLElement).style.display = "none";
  }

  document.getElementById(`post-${file}`).style.display = "block";
};
