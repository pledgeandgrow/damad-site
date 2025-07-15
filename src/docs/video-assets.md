# Video Assets for Hero Section

## Required Video File

The hero section now requires an elevator video file to be placed in the public directory:

- **File Path**: `/public/videos/elevator.mp4`
- **Content**: A high-quality video of an elevator in motion (going up or down)
- **Recommended Specs**:
  - Resolution: 1920x1080 (Full HD) or higher
  - Duration: 10-30 seconds (will loop automatically)
  - Format: MP4 with H.264 encoding
  - Size: Optimized for web (ideally under 5MB)

## Video Recommendations

For best results, the video should:

1. Show a modern elevator in motion
2. Have good lighting and clear visibility
3. Be filmed from either:
   - Inside the elevator looking out through glass doors
   - Outside looking at the elevator moving through a glass shaft
   - A professional marketing angle showing the elevator mechanism

## Implementation Details

The video has been implemented with:

- Full-screen background coverage
- Subtle blur effect for better text readability
- Dark overlay gradient to enhance text contrast
- Responsive design for all screen sizes
- Proper loading handling with opacity transitions

## Alternative Options

If a suitable elevator.mp4 file is not available, consider:

1. Using a high-quality GIF instead (place in the same location)
2. Using a series of images with CSS animation
3. Purchasing stock video from sites like Shutterstock, Adobe Stock, or Pexels

## Performance Considerations

To ensure optimal performance:

- Compress the video using a tool like HandBrake or an online video compressor
- Consider creating multiple resolutions for different device sizes
- Ensure the video is properly cached by the browser
- Test loading performance on various connection speeds
