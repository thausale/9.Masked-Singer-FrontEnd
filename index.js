console.log("script loaded");
const form = document.querySelector("form");

const upload = async (body) => {
  try {
    const response = await fetch("/upload", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const imageInput = document.querySelector("#image");
    //   console.log(imageInput.files[0]);
    console.log("form submitted");
    const body = {
      name: document.querySelector("#name").value,
      image: imageInput.files[0],
      place: document.querySelector("#place").value,
      episodeCount: document.querySelector("#episodeCount").value,
      startedEpisode: document.querySelector("#startedEpisode").value,
      participant: document.querySelector("#participant").value,
    };
    await upload(body);

    console.log(body);
  } catch (error) {
    console.error(error);
  }
});
