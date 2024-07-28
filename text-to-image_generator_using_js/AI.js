document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    const generateButton = document.getElementById('generate-button');
    const textInput = document.getElementById('text-input');
    const imageOutput = document.getElementById('image-output');

    const token = "YOUR_HUGGINGFACE_TOKEN";

    async function genImg() {
        const userInput = textInput.value;
        if (userInput) {
            try {
                const response = await fetch(
                    "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({ "inputs": userInput }),
                    }
                );
                console.log(response);
                const result = await response.blob();
                console.log(result);
                const objectURL = URL.createObjectURL(result);
                console.log(objectURL);
                imageOutput.innerHTML = `<img src="${objectURL}" alt="Generated Image" />`;
            } catch (error) {
                imageOutput.innerHTML = `<p>Error: ${error.message}</p>`;
            }
        } else {
            imageOutput.innerHTML = '<p>Please enter some text</p>';
        }
    }

    generateButton.addEventListener('click', genImg);
});

