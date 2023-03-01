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
    console.log("form submitted");
    e.preventDefault();
    const imageInput = document.querySelector("#image");

    //Creating the formData datatype
    const formData = new FormData();

    //Binding all the data to the formData
    formData.append("name", document.querySelector("#name").value);
    formData.append("image", imageInput.files[0]);
    formData.append("place", document.querySelector("#place").value);
    formData.append(
      "episodeCount",
      document.querySelector("#episodeCount").value
    );
    formData.append(
      "startedEpisode",
      document.querySelector("#startedEpisode").value
    );
    formData.append(
      "participant",
      document.querySelector("#participant").value
    );

    //Uploading the form
    await upload(formData);

    // console.log(formData);
  } catch (error) {
    console.error(error);
  }
});
