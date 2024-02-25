import base64
import requests
import json
import os
from dotenv import load_dotenv
load_dotenv()

# OpenAI API Key
api_key = os.getenv("OPENAI_API_KEY")


# Function to encode the image
def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


# Path to your image
image_path = "inventory.jpg"


def call_image_api(base64_image) -> dict:
    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"}

    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": """
                "Based on the ingredients visible in the image, create a simplified recipe by performing the following steps:
                -Identify each ingredient and estimate its quantity. Always make your best estimate for ambiguous quantities.
                -Decide on a suitable name for the dish that can be prepared with these ingredients.
                -Write down a sequence of instructions that would logically use these ingredients to prepare the dish.
                -Format the information into a JSON structure with the following fields: 'recipe_name' for the dish name, 'ingredients' as an array of objects with 'name', 'quantity', and 'unit' for each ingredient, and 'instructions' as an array of objects with 'step' and 'direction' for each preparation step.
                The resulting JSON should be concise and limited to the essential details required to recreate the dish. Output ONLY the json and do not use markdown at all."
                """,
                    },
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"},
                    },
                ],
            }
        ],
        "max_tokens": 4096,
    }
    response = requests.post(
        "https://api.openai.com/v1/chat/completions", headers=headers, json=payload
    )
    obj = response.json()["choices"][0]["message"]["content"]
    return json.loads(obj)
