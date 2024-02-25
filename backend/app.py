from fastapi import FastAPI, File, Form, UploadFile, Response
import base64
from fastapi.responses import FileResponse
from pydantic import BaseModel
import json

from openai_call import call_image_api
from dotenv import load_dotenv
import os
load_dotenv()

# OpenAI API Key
eleven_key = os.getenv("ELEVEN_API_KEY")
app = FastAPI()
CHUNK_SIZE = 1024

@app.get("/")
async def root():
    return {"message": "Hello World"}


DEMO = True
@app.post("/image_upload")
def _file_upload(image: UploadFile = File(...)):
    if DEMO:
        with open("./sample_response.json", "r") as instruction_json:
            data = json.load(instruction_json)
        return data
    image_bytes = image.file.read()
    binary_image = base64.b64encode(image_bytes).decode("utf-8")
    return call_image_api(binary_image)


class Instruction(BaseModel):
    step: int
    direction: str



@app.post("/get_audio/")
async def get_audio(request: Instruction):
    if DEMO:
        return FileResponse(f'audio_files/step{request.step}.mp3', media_type="audio/mpeg", filename=f'audio_files/step{request.step}.mp3')

    await text_to_voice(request.direction, f'audio_files/step{request.step}.mp3')
    print(f'audio_files/step{request.step}.mp3')
    # return Response(content=response.text, media_type="audio/mpeg")
    return FileResponse(f'audio_files/step{request.step}.mp3', media_type="audio/mpeg", filename=f'audio_files/step{request.step}.mp3')



import requests
async def text_to_voice(text: str, file_path: str):
    url = "https://api.elevenlabs.io/v1/text-to-speech/onwK4e9ZLuTAKqWW03F9"
    payload = {"text":text}
    headers = {
        "xi-api-key": eleven_key,
        "Content-Type": "application/json"
    }
    response = requests.request("POST", url, json=payload, headers=headers)
    with open(file_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
            if chunk:
                f.write(chunk)
    
    return response
