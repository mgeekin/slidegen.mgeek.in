import webview
import eel
import threading

PORT = 8900

def start_app():
    eel_thread = threading.Thread(target=eel_start) # Eel app start.
    eel_thread.setDaemon(True)
    eel_thread.start() # Run eel in a seperate thread.

    webview_start() # Start pywebview web browser.

def eel_start():
    # EEL app start.
    eel.init("web")
    try:
        eel.start("index.html", port=PORT, mode=None, shutdown_delay=0.0)
    except:
        PORT += 1
        eel.start("index.html", port=PORT, mode=None, shutdown_delay=0.0)

def webview_start():
    # pywebview start.
    webview.create_window("App Name", f"http://localhost:{PORT}")
    webview.start()

start_app() # Run app.


# import eel
# eel.init('web')
# eel.start('index.html')
