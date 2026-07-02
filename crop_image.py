from PIL import Image

image_path = 'src/assets/profile_image.png'
img = Image.open(image_path)
bbox = img.getbbox()

if bbox:
    print(f"Original size: {img.size}")
    img_cropped = img.crop(bbox)
    print(f"Cropped size: {img_cropped.size}")
    img_cropped.save(image_path)
    print("Image successfully cropped to content bounding box.")
else:
    print("Image is entirely transparent.")
