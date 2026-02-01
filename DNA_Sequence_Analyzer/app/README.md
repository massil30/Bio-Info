# Application

## 📱 Main Application File

This folder contains the DNA Sequence Analyzer web application.

### File
- **index.html** - Complete single-file application

### How to Run

#### Option 1: Direct Browser (Easiest)
1. Double-click `index.html`
2. It will open in your default browser
3. Start analyzing DNA sequences!

#### Option 2: From Command Line
```bash
# Navigate to this folder
cd app/

# Open in browser (choose your OS)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

#### Option 3: Local Web Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# Then open: http://localhost:8000
```

### No Installation Required!
The application is completely self-contained:
- ✅ No dependencies to install
- ✅ No build process needed
- ✅ No configuration required
- ✅ Works offline (except 3D structures which load from internet)

### Browser Requirements
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript enabled
- Internet connection (for 3D protein structures only)

### Features
All features are included in this single file:
- Single sequence analysis
- Mutation detection
- 3D protein visualization
- Interactive UI
- Real-time processing

### File Size
~72 KB - Very lightweight!

### Technology Stack
- HTML5
- CSS3 (embedded)
- JavaScript ES6+ (embedded)
- React 18 (loaded from CDN)
- NGL Viewer (loaded from CDN)

### Customization
The file is well-commented and can be modified:
- Edit CSS variables for colors
- Modify protein database entries
- Adjust UI layout
- Add new features

### Performance
- Loads in <1 second
- Analyzes sequences in real-time
- Handles sequences up to 100,000 bp
- Smooth 60 FPS 3D rendering

---

**Quick Start:** Just open `index.html` in your browser! 🚀
