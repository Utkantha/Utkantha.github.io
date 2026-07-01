import os
from rembg import remove

input_path = 'src/assets/profile_image.jfif'
output_path = 'src/assets/profile_image.png'

# Check if image exists
if not os.path.exists(input_path):
    print("Input image not found")
    exit(1)

# Open image and remove background
print("Loading image...")
with open(input_path, 'rb') as i:
    input_data = i.read()
    print("Removing background...")
    output_data = remove(input_data)
    
print("Saving image...")
with open(output_path, 'wb') as o:
    o.write(output_data)

print(f"Successfully saved transparent image to {output_path}")
