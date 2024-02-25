from fastapi import FastAPI, File, Form, UploadFile
import base64

from openai_call import call_image_api

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/image_upload")
def _file_upload(image: UploadFile = File(...)):

    image_bytes = image.file.read()
    binary_image = base64.b64encode(image_bytes).decode("utf-8")
    return call_image_api(binary_image)
