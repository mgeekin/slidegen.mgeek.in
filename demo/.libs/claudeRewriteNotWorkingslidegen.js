const slidegenlicense = "copyrights mGeek.in and Dr. Prateek Raj Gautam, soon to be released under Apache 2.0";
const slidegenversion = `v1.2.4`;

/**
 * Set the browser tab title from the first heading matched by the selector
 * `sideroot h3,h2,h1`, one second after the page was built. Failures are ignored on purpose.
 * Note: `sideroot` looks like a typo for `slideroot`; left unchanged to keep behaviour.
 */
const setSlidegenTitle = () =>{
    setTimeout(()=>{
        try{ 
          var slideTitle = grab("sideroot h3,h2,h1")[0].innerText
          document.title = slideTitle;
          grab("title[0]").innerText = slideTitle;
        }  
        catch (e) {}
        },1000
    );
}; 

//STYLE
var slideScss = `

/* main.js/slideScss*/

@import url("https://fonts.googleapis.com/css2?family=Cantarell&display=swap");

:root {
    --hue: 276;
    --sat: 70%;
    --light: 10%;
    --hueAscent: 234;
    --lightAscent: 67%;
    --fontFamily: "Exo Roboto";
    --blockCountColor: #fff;
    --fontScale: 1;
    --fontsize: 1.3rem;
    --linkColor: hsl(var(--hue), 50%, 60%);
}

::selection {
    background: hsl(var(--hueAscent),
            var(--satAscent),
            calc(calc(var(--light) + var(--lightAscent)) / 2));
}

#app {
    position: relative;
}

#header {
    position: relative;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &:hover {
        opacity: 1;
    }
}

:fullscreen {
    background-color: hsl(var(--h), var(--s), var(--l));

    .slideroot {
        height: 100vh;
    }
}

.slideroot {
    position: sticky;
    top: var(--headerHeight, 60px);
    scroll-snap-type: y mandatory;
    height: calc(100vh - var(--headerHeight, 60px));

    overflow: scroll;
    background-color: hsla(0, 0%, 100%, 0.1);
}

.slide {
    position: relative;
    --padding: clamp(1em, 15vw, 2em);
    width: calc(100%);
    // height:calc(100vh - var(--headerHeight,60px));
    height: 100%;
    padding-inline: clamp(2em, 10vw, 10vw);
    padding-block: var(--padding);
    box-sizing: border-box;
    font-size: clamp(calc(0.8rem * var(--fontScale, 1)),
            3vw,
            calc(1.5rem * var(--fontScale, 1)));
    // background-color:hsla(0,0%,100%,.1);
    overflow-y: auto;
    scroll-snap-align: start;
    scroll-padding: var(--headerHeight, 60px);
    scroll-snap-stop: always;
    scroll-behavior: smooth;

    .slideCount {
        display: inline-block;
        position: absolute;
        top: 1em;
        right: 4em;
        font-size: calc(0.8rem * var(--fontScale, 1));
        color: var(--textColor);
        cursor: pointer;
        padding: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: hsl(var(--hueAscent, 30),
                var(--satAscent, 70%),
                var(--lightAscent, 50%));
        padding-block: 0.4em;
    }


    b,
    strong {
        color: hsl(var(--hue, 30),
                calc(var(--satAscent, 70%) * .9),
                calc(var(--lightAscent, 50%) * .8));
    }

    i,
    em {
        color: hsl(var(--hueAscent, 30),
                calc(var(--satAscent, 70%) * .9),
                calc(var(--lightAscent, 50%) * .8));
    }

    h1 {
        font-size: 1.5em;

        &:first-child {
            padding-top: 0px !important;
        }
    }

    h2 {
        font-size: 1.3em;
    }

    a {
        color: var(--linkColor, hsl(0, 0%, 100%));
    }

    &:nth-child(odd) {
        background-color: hsla(0, 60%, 40%, 0.05);
    }

    ol,
    ul,
    p,
    img {
        padding: clamp(0.5em, 10vw, 1em);
    }

    ol,
    ul {
        margin-left: 2em;
        padding-left: 1em;
    }

    li {
        padding-block: 0.2em;

        &:first-child {
            padding-top: 0px;
        }

        &:last-child {
            padding-bottom: 0px;
        }
    }

    img {
        max-width: 80vw;
        // max-height:80vh;
        aspect-ratio: prefer-content;
        padding: 1em;
    }

    blockquote {
        padding-block: 0.1em;
        padding-inline: 1em;
        font-style: italic;
        text-shadow: 0.05em 0.05em 0 hsla(var(--hueAscent), 70%, 40%, 0.4);
    }

    p {
        padding: 0px;
        padding-block: .5em;

        &:empty {
            display: none;
        }
    }
}

table {
    position: relative;
    display: block;
    width: 90%;
    padding: 0.5em;
    margin: 2em;
    margin-inline: auto;
    box-shadow: 0 0 5px var(--testShadow, black);
    overflow: auto;

    thead,
    td:nth-child(1) {
        position: relative;
    }

    thead,
    tbody {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    tr {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        padding: 0.2em;

        td {
            display:flex;
            width: 100%;
            padding: 0.2em;
            background: red;
            background-color: hsla(var(--hue, 0), 60%, 5%, 0.1);

            &:nth-child(even) {
                background-color: hsla(var(--hue, 0), 60%, 5%, 0.1);
            }

            &:hover {
                background-color: hsla(var(--hue, 0), 60%, 45%, 0.2);
            }
        }

        .left {
            justify-content: left;
        }

        .right {
            justify-content: right;
        }

        .justify {
            justify-content: justify;
        }

        .center {
            justify-content: center;
        }

        &:nth-child(even) {
            background-color: hsla(var(--hue, 0), 40%, 35%, 0.15);
        }

        &:hover {
            background-color: hsla(var(--hue, 0), 60%, 45%, 0.2);
        }
    }
}

#sideBar {
    display: block;
    position: fixed;
    top: 0;
    height: 100vh;
    padding: 1em;
    margin-inline: auto;
    z-index: 100;
    left: 0;
    width: clamp(150px, 5vw, 10vw);
    transition: all 0.1s ease-in-out;
    background-color: hsla(var(--hue), 70%, 5%, 1);
    opacity: 0;

    transform: translateX(calc(-100% + 2em));

    &:hover {
        opacity: 1;
        border-right: 1px solid hsla(var(--hueAscent), 50%, 10%, 1);
        box-shadow: 1em 0 0.5em hsla(0, 0%, 0%, 0.2);
        transform: translateX(0);
    }

    #slidenav {
        position: relative;
        height: 100%;
        padding-block: 1em;
        width: 100%;

        .sideBarSearchInput{
          position: relative;
          max-width:100%;
          padding:.2em;
          margin-top: .5em;
          border:2px solid var(--textColor);
          border-radius:.5em;
         }



        #slidenavlist {
            position: relative;
            height: calc(90vh - 2em);
            overflow-y: auto;
            margin-top: 1em;
            padding: 5px;
            list-style-type: none;
            font-size: 0.8em;

            li {
                margin-block: .5em;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-inline:.5em;
                cursor: hand;

                a, .slideNavLink {
                    background-color: hsl(var(--hue), 50%, 95%);
                    color: var(--accentColor, hsl(var(--hueAscent), 80%, 20%));
                    border-radius: 5px;
                    font-weight: bold;
                    box-shadow: 0.1em 0.1em 5px hsla(0, 0%, 0%, 0.2);

                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    min-width: 6em;
                    height: 100%;
                    min-height: 2em;
                    text-decoration: none;

                    &:hover,
                    .active {
                        outline: 2px solid aqua;
                    }

                    p{
                    font-weight: normal;
                    font-size:.8em;
                    padding-inline:.5;
                    
                    }
                }

                &:nth-last-child(1) {
                    margin-bottom: 40vh;
                }

                &:nth-first-child(1) {
                    margin-top: 2em;
                }
            }
        }
    }
}

.blockroot {
    position: sticky;
    top: 0;
    height: 100vh;
    padding-block: 2em;
    padding-inline: clamp(2em, 10vw, 30vw);
    margin-block: 0em;
    overflow: scroll;
    background-color: hsla(0, 0%, 100%, 0.1);
    overflow-y: auto;

    scroll-snap-type: y mandatory;
    scroll-snap-align: start;
    scroll-padding: var(--headerHeight, 60px);
    scroll-snap-stop: always;
    scroll-behavior: smooth;

    .block {
        margin-inline: auto;
        margin-block: 2em;
        word-break: break-word;
        width: 100%;
        padding: 0.5em;
        // background-color:hsla(0,0%,100%,.1);

        box-shadow: 1px 1px 0.5em hsla(0, 0%, 0%, 0.2);

        pre {
            // display:block;
            // margin-block:1em;
            padding: 0;
            margin: 0;
            box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.2);

            code {
                display: block;
                margin: 0;
                padding: 0.5em;
                margin-inline: 0.2em;
                padding-inline: 0.2em;

                span {
                    padding: 0;
                    margin: 0;
                }
            }
        }

        &:last-child {
            margin-bottom: 10em;
        }

        .execution_count {
            font-weight: 300;
            font-size: 0.6em;
            // padding:.1em;
            // margin:.1em;
        }
    }

    .input {
        display: block;
        margin-inline: auto;
        margin-block: 1em;
        // background-color:hsla(0,0%,0%,.1);
        font-family: "consoles", "terminal", "monospace";
        overflow-x: auto;
    }

    .output {
        display: block;
        font-family: "consoles", "terminal", "monospace";
        background-color: hsla(0, 0%, 0%, 0.05);

        // overflow-x:auto;
        // outline:1px solid black;
        img {
            margin-inline: auto;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .success {
            color: green;
        }

        .fail {
            color: red;
        }
    }
}

.needs-background-light {
    background: hsla(0, 0%, 100%, 0.9) !important;
    padding-block: 1em;
}

.code {
    background-color: hsla(0, 0%, 100%, 0.8);
//    color: #333;
    padding: 1em;
}

#app{
  user-select: none;
  code{
    user-select:text;
    &:selection{
        background: gray;
    }
  }
}

#titleheading {
    a {
        link-style: none;
        text-style: none;
    }
}

#fullscreenTitle {
    display: grid;
    place-items: center;
    margin: 0 auto;
    padding: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 2em;
    z-index: 1000;
}




.cross {
    position: absolute;
    top: 1em;
    display: inline-block;
    right: 1em;
    height: 1em;
    width: 1em;
    cursor: pointer;

    &:before {
        content: "";
        background-color: white;
        display: inline-block;
        position: absolute;
        width: 15%;
        height: 100%;
        transform: rotate(-45deg);
    }

    &:after {
        content: "";
        background-color: white;
        display: inline-block;
        position: absolute;
        width: 15%;
        height: 100%;
        transform: rotate(45deg);
    }
}



.MathJax {
    padding: 2px 5px;
    cursor: pointer;
}



`;




var pdfdialogscss=`


.pdfdialog{
   position: absolute;
   top:10%;
   left:10%;
   width:80%;
   height: 80%;
   border-radius: 2em;
   border:1px solid var(--ascentColor);
   background-color: hsla(var(--hue),var(--sat),var(--light),.3);
   display: flex;
   flex-direction: column;
   overflow: auto;
   box-shadow: 2px 5px 15px gray;
   backdrop-filter:blur(4px);

  
  .download {
    max-width: 15em;
    padding:1em;
    margin: 2em 0;
    display:flex;
    align-self:center;
    
  }
  
  .mainpdf{
    height: 100%;  
  }
  
    &:modal{    
    backdrop-filter: blur(10px);
    box-shadow: 1px 1px 1em white;
  }
  

  .closedialog{
    position: absolute;
    top:1em;
    right:1em;
    transform: translateY(50%) rotate(45deg); 
    padding:2em;
    cursor:pointer;
    &:after{
      
      content:"";
      position: absolute;
      top:0;
      left:0;
      background-color: white;
      width:1.5em;
      height: 2px; 
      transform: translateY(50%) rotate(90deg); 
    }

    &:before{
      content:"";
      position: absolute;
      top:0;
      left:0;
      background-color: white;
      width:1.5em;
      height: 2px; 
   
  }
}
  
  
}
`
//loadscss(slideScss)

// ============================================================================
// SOURCES, INSERT MODES AND OPEN / DROP ENTRY POINTS
// ============================================================================
// Naming convention used from here on:
//   loadX(source, opts)      fetch/read the source, prepare the page, call processX, run hooks
//   processX(content, opts)  turn already-loaded content into DOM inside opts.target
//   parseX(...)              OLD names, kept as thin fallbacks that call loadX
//
// A "source" is either a URL string (fetched with getfile) or a File/Blob
// (read with .text()). Every loadX() accepts both, so openFile and drag & drop
// no longer need URL.createObjectURL plumbing.

/**
 * Insert modes accepted by every loadX()/processX() function. They map onto the
 * `type` argument of the external append() helper.
 *  - over:  clear the target, then render into it (the old default behaviour)
 *  - after: append to the target without clearing it ("a")
 * Any other append() type code ("before", "replace", ...) can be passed as a plain string.
 */
const MODE = { over: "over", after: "a", before: "b", replace: "r", parent: "p" };

/**
 * Single adapter around the external markdown converter `parsemd` (defined in the
 * helper library, not in this file). Every markdown->HTML conversion in slidegen
 * goes through here, so only this line has to change if the converter is renamed.
 *
 * @param {string} md - markdown text
 * @param {function} [cb] - optional (html, script) callback, used for slides
 * @returns {string|undefined} HTML when called without a callback
 */
function mdToHtml(md, cb) {
  return cb ? parsemd(md, cb) : parsemd(md);
}

/**
 * Promise wrapper around the callback style getfile(url, callback) helper.
 *
 * @param {string} url
 * @returns {Promise<string>} the file text
 */
function getText(url) {
  return new Promise((resolve, reject) => {
    try {
      getfile(url, resolve);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Read the text of a source.
 *
 * @param {string|Blob} src - URL string, or a File/Blob from <input type=file> or drag & drop
 * @returns {Promise<string>}
 */
function readSource(src) {
  return src instanceof Blob ? src.text() : getText(src);
}

/**
 * Human readable file name of a source.
 *
 * @param {string|File} src - URL string or File
 * @param {boolean} [decode=true] - replace %20 with a space (pass false when the raw name is needed, e.g. for the router)
 * @returns {string}
 */
function getSourceName(src, decode = true) {
  const name = typeof src === "string" ? src.split("/").pop() : src.name || "untitled";
  return decode ? name.replaceAll("%20", " ") : name;
}

/**
 * URL usable in links ("Source" / "Download source"): the URL itself, or a blob URL for a File.
 *
 * @param {string|File} src
 * @returns {string}
 */
function getSourceUrl(src) {
  return typeof src === "string" ? src : URL.createObjectURL(src);
}

/**
 * Put a freshly created element into the target using an insert mode.
 * This is the ONE place that decides whether the target is cleared, so processX()
 * functions no longer hardcode `append(main, "", "over")`.
 *
 * @param {string|Element} target - selector or element that receives the content
 * @param {Element} el - element to insert
 * @param {string} [mode=MODE.over] - MODE.over clears the target first, any other append() type is passed through
 */
function placeInTarget(target, el, mode = MODE.over) {
  if (mode === MODE.over) {
    append(target, "", "over");
    append(target, el);
  } else {
    append(target, el, mode);
  }
}

/**
 * Find the handler for a file name (extension, extension alias, or MIME type).
 * Handlers live in the `handlers` registry further down in this file.
 *
 * @param {string} name - file name or path
 * @param {string} [mime=""] - MIME type of a File, used when the extension is unknown
 * @returns {object|undefined} handler entry
 */
function findHandler(name, mime = "") {
  const ext = getExtension(name);
  if (handlers[ext]) return handlers[ext];
  const all = Object.values(handlers);
  return all.find((h) => h.aliases && h.aliases.includes(ext)) || all.find((h) => mime && h.mime === mime);
}

/**
 * Open any source with the right loader. This replaces the four separate
 * extension->loader tables that used to live in generateView, openFile, the drop
 * handler and renderFile.
 *
 * @param {string|File} src - URL string or File
 * @param {string} [name] - name used to detect the type (defaults to the source name)
 * @param {object} [opts] - passed to the loader: { target, mode, id, callback }
 * @returns {Promise<object|null>} whatever the loader returns (view handles), or null when unsupported
 */
function openSource(src, name = getSourceName(src, false), opts = {}) {
  const handler = findHandler(name, src instanceof Blob ? src.type : "");
  if (!handler) {
    console.warn("slidegen: no handler for", name);
    return Promise.resolve(null);
  }
  if (!handler.load) {
    // download-only types (docx, xlsx, ...)
    if (typeof src === "string") downloadURL(src);
    return Promise.resolve(null);
  }
  const callback = opts.callback || handler.afterLoad;
  return handler.load(src, { ...opts, callback });
}

/**
 * Open several local files one after another. The first file uses the requested
 * mode (default "over"), the rest are appended after it. They run sequentially
 * because loads are async and a later "over" would otherwise wipe an earlier file.
 *
 * @param {FileList|File[]} files
 * @param {object} [opts] - loader options (target, mode, ...)
 */
async function openFiles(files, opts = {}) {
  const list = Array.from(files || []);
  for (let i = 0; i < list.length; i++) {
    try {
      await openSource(list[i], list[i].name, { ...opts, mode: i === 0 ? opts.mode || MODE.over : MODE.after });
    } catch (e) {
      console.error("slidegen: failed to open", list[i].name, e);
    }
  }
}

/**
 * Handler of the footer "Open" button (<input id="open">) and of the "o" key.
 * With no file chosen yet it opens the file dialog, otherwise it loads the chosen files.
 */
function openFile() {
  const input = grab("#open")[0];
  if (!input) return;
  if (!input.files || input.files.length === 0) {
    input.click();
    return;
  }
  const files = Array.from(input.files);
  input.value = ""; // allows choosing the same file again
  openFiles(files);
}

/**
 * Open the current URL in a second small window (clone view).
 * Presenter notes and slide synchronisation between the two windows are still in development;
 * the page already has a BroadcastChannel("hashChannel") that could carry the current slide.
 */
function cloneView() {
  var url = window.location.href;
  // window.open(url, '_blank');
  window.open(url, "newwindow", "width=600,height=400");
  gen(a, "clone", "Open Clone Window", "hide", {
    href: window.location.href,
    target: "_blank",
  }).click();
}

/**
 * Show/hide the keyboard hints. Placeholder: bound to the "h" key but not implemented yet.
 */
function toggleHints() { }

/**
 * Toggle fullscreen on #main. Bound to the "f" key and to double click.
 * Exits fullscreen when already active. (A title string is built when entering, but the
 * element that would show it is commented out, so it is currently unused.)
 */
function toggleFullscreen() {
  if (document.fullscreenElement) {
    // append(fullscreenTitle, "", 'replace')
    document.exitFullscreen();
  } else {
    // document.documentElement.requestFullscreen();
    grab(`#main`)[0].requestFullscreen();
    var titlestr =
      document.title +
      router.pathname.replaceAll("/", " | ") +
      grab("h1")[0].innerHTML;
    // append(main, gen(div, "fullscreenTitle", titlestr), 'before')
  }
}

document.addEventListener("dblclick", (e) => {
  if (document.activeElement.tagName.toLowerCase() === "input") {
    return; // Do nothing if the user is typing in a search input
  }
  e.preventDefault();
  toggleFullscreen();
});

/**
 * Scroll the slide/notebook container by one screen or to its start/end.
 * Names are kept from the original: "up" moves forward one screen, "down" moves back one.
 * Does nothing on pages without a slide container (e.g. csv).
 *
 * @param {"up"|"down"|"home"|"end"} [direction="down"]
 * @param {number} [scrollState] - current position in screens (computed from scrollTop when omitted)
 */
function scrollAction(direction = "down", scrollState) {
  // the slide/notebook container; nothing to scroll on pages without one (e.g. csv)
  var rootEl = grab(`#slideroot`)[0] || grab(`.slideroot`)[0];
  if (!rootEl) return;
  var end = rootEl.scrollHeight - rootEl.offsetHeight;
  var offsetHeight = rootEl.offsetHeight;

  if (!scrollState) scrollState = rootEl.scrollTop / offsetHeight;
  var endState = end / offsetHeight;

  if (direction == "home") {
    rootEl.scrollTop = 0;
  }
  if (direction == "end") {
    rootEl.scrollTop = endState * offsetHeight;
  }
  if (direction == "up") {
    // "up" moves forward one screen (name kept from the original)
    scrollState += 1;
    rootEl.scrollTop = scrollState * offsetHeight;
  }
  if (direction == "down") {
    // "down" moves back one screen (name kept from the original)
    scrollState -= 1;
    rootEl.scrollTop = scrollState * offsetHeight;
  }
}

/**
 * Global keyboard shortcuts: arrows/page keys = previous/next slide, home/end,
 * f = fullscreen, o = open file, c = clone view, h = hints, r = reload, enter = click focused
 * element, backspace = go up one folder, ctrl+o = open file dialog.
 * Ignored while typing in an <input>.
 *
 * @param {KeyboardEvent} e
 */
function keyPressHandler(e) {

  if (document.activeElement.tagName.toLowerCase() === "input") {
    return; // Do nothing if the user is typing in a search input
  }

  // e.preventDefault()
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
  } else {
    var key = e.key.toLowerCase();
    // log(key)
    if (key == "arrowdown" || key == "pagedown" || key == "arrowright") {
      e.preventDefault();
      scrollAction("up");
    }
    if (key == "arrowup" || key == "arrowleft" || key == "pageup") {
      e.preventDefault();
      scrollAction("down");
    }
    if (key == "home") {
      e.preventDefault();
      scrollAction("home");
    }
    if (key == "end") {
      e.preventDefault();
      scrollAction("end");
    }
    if (key == "f") {
      e.preventDefault();
      toggleFullscreen();
    }
    if (key == "o") {
      e.preventDefault();
      openFile();
    }
    if (key == "c") {
      e.preventDefault();
      cloneView();
    }
    if (key == "h") {
      e.preventDefault();
      toggleHints();
    }
    if (key == "r") {
      e.preventDefault();
      reloadPage();
    }
    if (key == "enter") {
      e.preventDefault();
      if (document.activeElement != document.body) {
        document.activeElement.click();
      }
    }
    if (key == "backspace") {
      e.preventDefault();
      grab(".pathNavigator")[grab(".pathNavigator").length - 1].click();
    }
    if (key == "escape") {
      e.preventDefault();
      //closeModal may interfere with fullscreenmode
    }
  }
  if (e.ctrlKey && e.key.toLowerCase() == "o") {
    e.preventDefault();
    grab("#open")[0].click();
  }
  e.stopPropagation();
}



document.addEventListener("keydown",keyPressHandler,false);

const hashChannel = new BroadcastChannel("hashChannel");

window.addEventListener("hashchange", (e) => {
  hashChannel.postMessage({
    dir: router.dir.substring(1),
    file: router.file,
  });
});

hashChannel.addEventListener("message", (e) => {
  var dir = e.data.dir;
  var file = e.data.file;
  // var router = new Router()
  // if ((router.dir != dir) || (router.file != file)) {
  //     router.setdirpath(dir, file)
  // }
});

/**
 * After a view is rendered, rewrite "./" in href/src of a, script, picture, image,
 * video and object elements so relative links resolve against the current directory
 * (router.dirpath). Runs after a 2s delay to let the content settle, then updates the page title.
 */
const convertLocalLinks = () => {
  // var router = new Router(); xxx
  setTimeout(() => {
    // document.body.innerHTML = document.body.innerHTML.replaceAll(
    //   "./",
    //   router.dirpath
    // );
    
    //replace selectively only in a tag href script src, picture image or video
    "a,script,picture,image,video,object".split(",").forEach(tagname => {
      grab(tagname).forEach(a => {
        try {
          a.href = a.href.replaceAll("./",router.dirpath)
        } catch(e){}
        try{
        a.src = a.src.replaceAll("./",router.dirpath)
        }catch(e){}
        try{
        a.source = a.source.replaceAll("./",router.dirpath)
        }catch(e){}
      })
      
    })

  }, 2000);


// setTimeout(()=>{
//   try{ 
//       document.title = grab("h1,h2,h3,h4,h5,h6,p")[0].innerHTML;
//   }  catch (e) { }
// },1000)

setSlidegenTitle();
};

/**
 * Build the empty page layout once at start: header with title link, <main id="main">
 * (the render target of every loader), footer and a hero section. Also loads /style.scss.
 *
 * @param {string} [title="Home"] - text of the header link
 */
function loadBasicSkeleton(title = "Home") {
  load("/style.scss");
  //your app logic
  append(app, "", "over"); /* reset app */
  append(app, gen(header, "header", "", "header"));
  append(header, gen(h3, "heading", gen(a, "", title, "title", "/")));
  // append(app, gen(main, "main", "", 'main', { "draggable": "true" }));
  append(app, gen(main, "main", "", "main", { tabindex: 20 }));
  append(main, gen(div, "appmain", "", "appmain container"));
  append(app, gen(footer, "appfooter", "", "footer"));
  append(appmain, gen(section, "hero", "", "hero"));
}

/**
 * Convert an object into a URL hash string without the leading "#"
 * (for example {d: "/a/", f: "x.md"} becomes "d=/a/&f=x.md").
 *
 * @param {object} dict
 * @returns {string}
 */
function dict2hash(dict) {
  var hash = "";
  Object.keys(dict).forEach((key) => {
    if (hash.length == 0) {
      hash = key + "=" + dict[key];
    } else {
      hash += "&" + key + "=" + dict[key];
    }
  });
  return hash;
}

/**
 * Parse a URL hash ("#d=/a/&f=x.md") into an object ({d: "/a/", f: "x.md"}).
 *
 * @param {string} hash - hash including the leading "#"
 * @returns {object}
 */
function hash2dict(hash) {
  var dict = {};
  hash
    .substring(1)
    .split("&")
    .forEach((row) => {
      // var keyval = ""
      keyval = row.split("=");
      dict[keyval[0]] = keyval[1];
    });
  return dict;
}

// class Router { ... } // (Redundant class removed)




// ============================================================================
// ROUTER CLASS - Hash-based Navigation System
// ============================================================================

/**
 * Router class for managing application navigation and URL state
 * 
 * Architecture:
 * - Uses URL hash for storing directory and file paths
 * - Format: #dir=/path/to/folder/&file=filename.md
 * - Automatically updates URL when navigation changes
 * - Provides computed properties for full file paths
 * 
 * Properties:
 * - dir: Current directory path
 * - file: Current filename
 * - filepath: Full path to current file
 * - dirpath: Path to current directory
 * - hash: Current URL hash
 * - hashDict: Parsed hash as object
 * 
 * @debug Log router instance to inspect current navigation state
 */
class Router {
    /**
     * Initializes router by reading URL and hash
     * Automatically sets up navigation state from current URL
     */
    constructor() {
        this.dir = ""
        this.file = ""
        this.page = ""
        this.hashlink = ""
        this.hashObj = {}
        this.filepath = ""
        this.readfromurl()
        this.readHash()

        this.updateroute()
        return this.hash
    }

    /**
     * Parses current window location into router properties
     * Extracts: host, protocol, pathname, root, origin
     */
    readfromurl() {
        this.host = window.location.host
        this.protocol = window.location.protocol + "//"
        this.pathname = window.location.pathname
        this.root = this.protocol + this.host + this.pathname
        this.origin = window.location.origin

    }

    /**
     * Parses URL hash into router state
     * Extracts directory and file from hash parameters
     * Updates internal hashObj with all key-value pairs
     */
    readHash() {
        this.hash = window.location.hash
        this.hashDict = hash2dict(this.hash)
        this.hash.substring(1,).split("&").forEach(row => {
            var keyval = row.split("=")
            var key = keyval[0]
            var val = keyval[1]

            if (key == "dir" || key == "d") { this.dir = val }
            if (key == "file" || key == "f") { this.file = val }
            if (key == "p") { this.page = val }
            if (key == "h") { this.hashlink = val }
            
            this.hashObj[key] = val
        })
        this.setdirpath(this.dir, this.file)
    }

    /**
     * Updates router state and URL hash
     * Ensures directory paths end with /
     * Constructs full filepath from components
     * Updates window.location.hash if changed
     * 
     * @debug Critical method - log before/after state to debug navigation issues
     */
    updateroute(updateHash = true) {
        this.filepath = this.root
        // this.hash = `d=${this.dir}&f=${this.file}&p=${this.page}&h=${this.hashlink}`
        // this.hash = `d=${this.dir}&f=${this.file}`
        this.hash ="";
        if (this.dir.length>1) this.hash+=`d=${this.dir}&`;
        if (this.file!="") this.hash+=`f=${this.file}&`;
        if (this.page) this.hash+=`p=${this.page}&`;
        if (this.hashlink) this.hash+=`h=${this.hashlink}`;
        if (this.hash[this.hash.length-1] == "&") this.hash=this.hash.substring(0,this.hash.length-1)



        if (this.dir.length == 0 || this.dir == "/") {
            this.dir = "/"
        }
        else {
            if (this.dir.substring(this.dir.length - 1) != "/") {
                this.dir += "/"
            }
            this.filepath += this.dir
        }

        this.dirpath = this.filepath
        if (this.file.length > 0) {
            this.filepath += this.file
        }

        var oldhash = window.location.hash
        if (updateHash && oldhash != "#" + this.hash) {
            window.location.hash = this.hash
        }
    }

    /**
     * Sets directory and file path, then updates route
     * 
     * @param {string} dir - Directory path
     * @param {string} file - Filename
     * @param {string} url - Base URL (default: current origin)
     */
    setdirpath(dir = "", file = "", url = window.location.origin) {
        // window.location.href = url
        this.dir = dir
        this.file = file
        this.updateroute()
    }
    
    /**
     * Getter: Returns full filepath to current view
     * @returns {string} Complete URL to current file
     */
    get view() {
        return this.filepath
    }

    /**
     * Setter: Updates current file and refreshes route
     * @param {string} file - New filename
     */
    set setfile(file) {
        this.file = file

        this.updateroute()
    }

    /**
     * Setter: Updates current directory and refreshes route
     * @param {string} dir - New directory path
     */
    set setdir(dir) {
        this.dir = dir

        this.updateroute()
    }



}

/**
 * Global router instance
 * Used throughout application for navigation state
 * 
 * @debug Access via browser console: window.router or just router
 */
const router = new Router()











/**
 * Create the footer buttons: Reload, Print Slides, Print Notes and Open
 * (hidden file input #open plus its label). Rebuilt on every reloadPage().
 */
function footerButtons() {
  if (grab(`#footerButtons`).length != 0) {
    append(`#footerButtons`, "", "replace");
  }
  append(`#appfooter`, gen(div, "footerButtons", ""), "before");
  append(
    `#footerButtons`,
    gen(span, "reload", "Reload", "button,reloadPage", {
      onclick: "reloadPage()",
      title:"Reload Page",
    })
  );
  append(
    `#footerButtons`,
    gen(span, "print", "Print Slides", "button,printSlides", {
      onclick: "printSlides()",
      title:"Suitable for converting in to PDF, try print with no margin and background color",
    })
  );
  append(
    `#footerButtons`,
    gen(span, "printnotes", "Print Notes", "button,printSlides", {
      onclick: "printNotes()",
      title:"Suitable for actual printing notes in fewer pages",
    })
  );
  append(
    `#footerButtons`,
    gen(input, "open", "", "hide", {
      type: "file",
      accept: ".md,.markdown,.ipynb,.csv",
      onchange: "openFile()",
      multiple: "true",
    })
  );
  // append(`#footerButtons`, gen(input, "open", "Open", "button,openFile", { "type": "file", "onchange": "openFile()" }))
  append(
    `#footerButtons`,
    gen(label, "openbtn", "Open", "button,openFile", { for: "open",
      title:"Open local markdown(.md), interactive python notebook(.ipynb) or csv(.csv)", })
  );
}

/**
 * Render whatever the router currently points at (router.file inside router.dir).
 * With no file selected it falls back to the directory listing (list.txt).
 * Type detection and loader choice are done by openSource() and the handlers registry.
 */
function generateView() {
  if (grab("#appmain").length != 0) {
    append("#appmain", "", "over");
  }

  var file = router.file;
  if (file.length == 0) {
    router.file = "list.txt";
    router.updateroute(false);
    file = "list.txt";
  }

  // errors are logged instead of being swallowed by an empty catch
  openSource(router.view, file).catch((e) => console.error("slidegen: failed to open", file, e));
  try {
    updateFiledropEventListeners();
    imageFullscreenToggle();
  } catch (e) {
    console.error(e);
  }
}





/**
 * Start a browser download of a file by clicking a temporary hidden link.
 * Used for non-viewable types (docx, xlsx, pptx, odt, ods, odp).
 *
 * @param {string} [fileListUrl] - URL of the file to download
 * @param {string} [target="#main"] - unused, kept for compatibility
 */
function downloadURL(
  fileListUrl = window.location.origin + window.location.pathname + "list.txt",
  target = "#main"
) {
  // log(fileListUrl)
  var f=fileListUrl.split("/")
  var FileName =f[f.length-1];
  // log(f[-1])
  append(main,gen(a,"tempdownload","Download " + FileName,"hide",{href:fileListUrl,target:"_blank",download:FileName}))
  setTimeout(() => {
    grab("#tempdownload[0]").click()
    append("#tempdownload","",'r');
  }, 1000);
  
}









/**
 * Probe the current directory for slide.ipynb / slide.md and set router.file to the
 * one that exists. Currently not called from anywhere in this file; the returned
 * value is always "" (the probe results are applied asynchronously through the router).
 *
 * @returns {Promise<string>}
 */
async function filedetect() {
  // var router = new Router(); xxx
  var presentfile = "";
  var files = "slide.ipynb,slide.md".split(",");
  files.forEach((file) => {
    var testpath = router.root + router.dir.substring(1) + file;
    fetch(testpath).then((res) => {
      if (res.status == 200) {
        router.setfile = file;
      }
    });
  });
  return presentfile;
}






/**
 * Handles URL hash changes to update application state.
 * 
 * @debug Triggered on hashchange. 
 * Checks if directory has an index.html and redirects if so.
 * Reloads the page view.
 */
function updateOnHashChange() {
  window.removeEventListener("hashchange", updateOnHashChange);
  
  // Use global router instance
  if (router.dir != "/") {
    var indexpath = router.root + router.dir.substring(1) + "index.html";
    var newroot = router.root + router.dir.substring(1);
    var old_dir = router.dir;
    router.dir = "/";
    fetch(indexpath).then((res) => {
      if (res.status == 200) {
        window.location.href = newroot;
      }
    });
  }

  reloadPage();
};

/**
 * Rebuild the whole view for the current hash: clears session/local storage, redraws the
 * breadcrumb, renders the current file (generateView), rebuilds the footer buttons,
 * scrolls to the top and re-arms the hashchange listener.
 */
function reloadPage() {
  sessionStorage.clear();
  localStorage.clear();
  paginationUpdate();
  generateView();
  footerButtons();
  window.scrollTo(0, 0);
  window.addEventListener("hashchange", updateOnHashChange);
  // convertLocalLinks()
}


/**
 * Print the slide deck. Loads the slide print stylesheet (one slide per page,
 * suitable for saving as PDF) and opens the print dialog.
 */
function printSlides(){
  loadscss(printSlideStyle,"printSlideStyle");
  window.print()
}

/**
 * Print as notes. Loads the notes print stylesheet (compact, fewer pages) and opens the print dialog.
 */
function printNotes(){
  loadscss(printNotesStyle,"printNotesStyle");
  window.print()
}






/**
 * Add a "Back" button to the breadcrumb bar (#location). It returns to the parent
 * directory via changepath(). Replaces an existing Back button first.
 */
function appendBackButton() {
  if (grab("#back").length != 0) {
    append("#back", "", "replace");
  }

  append(
    `#location`,
    gen(span, "back", "Back", "pathNavigator", {
      "data-path":router.dirpath,
      "data-dir":router.dir,
      onclick: "changepath(this)",
      tabindex: 20,
    })
  );
}




/**
 * Click handler of the breadcrumb entries and the Back button: navigates to the
 * directory stored in the element's data-dir by updating the router (which updates the URL hash).
 *
 * @param {HTMLElement} thispath - element with data-dir
 */
function changepath(thispath) {
  var dir = thispath.dataset.dir;
  
  // Use global router instance
  router.setfile = "";
  router.setdir = dir;
};



/**
 * Rebuild the breadcrumb (#location) from the router state: one clickable
 * entry per directory level of the current path.
 *
 * @param {string} [loc=""] - unused, the location is read from the router
 */
function paginationUpdate(loc = "") {
  router.readHash();
  loc = router.pathname + router.dir;
  if (grab("#location").length != 0) {
    append("#location", "", "replace");
  }

  // try { append(`#location`, "", "replace") } catch { }
  append(`#header`, gen(nav, "location", ""));
  var root = router.protocol + router.host;
  var path = "/";

  var printLocation = loc.replaceAll("https://", "").replaceAll("http://", "");
  printLocation.split("/").forEach((l) => {
    if (l.length > 0) {
      l = l.replaceAll(/(\%20|\s)+/g," ")
      // log(l)
      path += l + "/";
      // append("#location", gen(a, '', l, 'pathNavigator', root + path, { "onclick": "updateOnHashChange()" }))
      append(
        "#location",
        gen(span, "", l, "pathNavigator", {
          "data-path": root + path,
          "data-dir":path,
          onclick: "changepath(this)",
          tabindex: 20,
        })
      );
      // append("#location", gen(span, '', "  ", 'spacer'))
    }
  });
  // generateView()
}

loadBasicSkeleton();







  /**
   * Click handler of a folder entry in the directory listing: enters the folder by
   * appending its data-dir to the current router directory.
   *
   * @param {HTMLElement} e - folder element with data-dir
   */
  const appendDir = (e) => {
    var newDir = router.dir + e.dataset.dir;
    newDir = newDir.replaceAll("//", "/").replaceAll("\\\\", "\\");
    router.setdirpath(newDir, "");
  }

  /**
   * Click handler of a markdown/notebook entry in the directory listing: selects the file
   * (data-file) in the current directory. The hash change then renders it.
   *
   * @param {HTMLElement} e - file element with data-file
   */
  const appendfile = (e) => {
    router.setdirpath(router.dir, e.dataset.file);
  }




/**
 * HANDLER REGISTRY - the single table that knows what to do with each file type.
 *
 * Keys are lower case extensions. Each entry may define:
 *  - load:      loader function loadX(source, opts) used by openSource()
 *  - aliases:   other extensions that map to this handler
 *  - mime:      MIME type used to detect dropped/opened Files without a known extension
 *  - afterLoad: default callback run after the loader finished
 *  - ui:        how the entry is drawn in the directory listing (tag, className, action)
 *
 * To support a new file type add ONE entry here (plus its loadX/processX pair);
 * generateView, openFile, drag & drop and the directory listing all pick it up.
 */
const handlers = {
  md: {
    load: loadMarkdown,
    aliases: ["markdown"],
    mime: "text/markdown",
    afterLoad: mathjaxHljsCopyIcon,
    ui: { tag: span, className: "slideLinks", action: "appendfile" }
  },
  ipynb: {
    load: loadIpynb,
    mime: "application/x-ipynb+json",
    ui: { tag: span, className: "slideLinks,notebookLinks", action: "appendfile" }
  },
  csv: {
    load: loadCsv,
    mime: "text/csv",
    ui: { tag: object, className: "csvLinks Links", action: "parseCsv" }
  },
  txt: { load: loadList },
  pdf: {
    load: loadPdf,
    mime: "application/pdf",
    ui: { tag: object, className: "pdfLinks", action: "parsePdf" }
  },
  docx: { ui: { tag: span, className: "Links Downloadable", action: "downloadURL" } },
  xlsx: { ui: { tag: span, className: "Links Downloadable", action: "downloadURL" } },
  pptx: { ui: { tag: span, className: "Links Downloadable", action: "downloadURL" } },
  odt:  { ui: { tag: span, className: "Links Downloadable", action: "downloadURL" } },
  ods:  { ui: { tag: span, className: "Links Downloadable", action: "downloadURL" } },
  odp:  { ui: { tag: span, className: "Links Downloadable", action: "downloadURL" } }
};

/**
 * Directory-listing view of the registry (extension -> { tag, className, action }).
 * Derived from `handlers`, kept under its old name because renderFile reads it.
 */
const fileTypes = Object.fromEntries(
  Object.entries(handlers)
    .filter(([, h]) => h.ui)
    .map(([ext, h]) => [ext, h.ui])
);

/**
 * Remove surrounding whitespace and a leading "./" from a path.
 *
 * @param {string} path
 * @returns {string}
 */
function cleanPath(path) {
  return path.trim().replace(/^\.\//, "");
}

/**
 * Get the lower case extension of the file name (not of its directory path).
 * Returns "" when there is none.
 *
 * @param {string} path
 * @returns {string} for example "md" or ""
 *
 */
function getExtension(path) {
  const filename = path.split("/").filter(Boolean).pop() || "";
  const dot = filename.lastIndexOf(".");

  return dot > 0 ? filename.slice(dot + 1).toLowerCase() : "";
}

/**
 * Create a readable label from a file or directory path: drops the trailing slash and
 * the extension, turns "/" into " / " and "-" / "_" into spaces.
 *
 * @param {string} path
 * @returns {string}
 */
function getDisplayName(path) {
  return path
    .replace(/\/$/, "")
    .replace(/\.[^.\/]+$/, "")
    .replaceAll("/", " / ")
    .replaceAll("-", " ")
    .replaceAll("_", " ");
}

/**
 * Decide whether a list.txt entry is a directory: it ends with "/" or has no extension.
 * Change this if your list generator uses a different directory format.
 *
 * @param {string} path
 * @returns {boolean}
 */
function isDirectory(path) {
  return path.endsWith("/") || getExtension(path) === "";
}

/**
 * Create the directory-listing element for one file and add it to the grid.
 * Unsupported extensions (no entry in fileTypes) are ignored.
 *
 * @param {string} path - file path from list.txt
 * @param {string} currentLocation - base URL of the directory (router.dirpath)
 * @param {Element} [grid] - element that receives the entry (defaults to #directoryGrid)
 */
function renderFile(path, currentLocation, grid) {
  const ext = getExtension(path);
  const config = fileTypes[ext];

  // Ignore file types that have no configured renderer.
  if (!config) return;

  const file = cleanPath(path);
  const url = currentLocation + file;
  const name = getDisplayName(file);

  // Keep the original onclick-based integration with your existing handlers.
  const actions = {
    appendfile: `appendfile(this)`,
    parsePdf: `loadPdf(\`${url}\`)`,
    parseCsv: `loadCsv(\`${url}\`)`,
    downloadURL: `downloadURL(\`${url}\`)`
  };

  const attrs = {
    "data-ext": ext,
    "data-file": file,
    onclick: actions[config.action],
    tabindex: 10
  };

  // Preserve the original download title.
  if (config.action === "downloadURL") {
    attrs.title = `download ${ext}`;
  }

  append(grid || grab("#directoryGrid")[0], gen(config.tag, url, name, config.className, attrs));
}

/**
 * PROCESS: turn the text of list.txt into the folder/file grid.
 * Pure rendering: it does not fetch and does not touch the router.
 *
 * @param {string} text - list.txt content, one path per line
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"] - where the grid is rendered
 * @param {string} [opts.mode=MODE.over] - insert mode, see MODE
 * @param {string} [opts.baseUrl=router.dirpath] - URL prefix used for file links
 * @returns {{root: Element, grid: Element}} handles of the created elements
 */
function processList(text, { target = "#main", mode = MODE.over, baseUrl = router.dirpath } = {}) {
  const root = gen(div, "appmain", "", "appmain");
  placeInTarget(target, root, mode);
  const grid = gen(div, "directoryGrid", "", "dirGrid");
  append(root, grid);

  // Clean the entries before sorting and processing them.
  const links = text
    .split(/\r?\n/)
    .map(cleanPath)
    .filter((path) => path && path !== "." && path !== "../")
    .sort();

  links.forEach((path) => {
    // Skip parent-directory traversal entries and hidden files.
    if (path.startsWith("../")) return;
    if (path[0] == ".") return;

    // Render directories separately from files.
    if (isDirectory(path)) {
      const dir = path.replace(/\/$/, "");
      const name = getDisplayName(dir);

      append(
        grid,
        gen(span, "", name, "folderLinks", {
          "data-dir": dir,
          onclick: "appendDir(this)",
          tabindex: 10
        })
      );
      return;
    }

    // All supported files share the same rendering logic.
    renderFile(path, baseUrl, grid);
  });

  return { root, grid };
}

/**
 * LOAD: fetch a list.txt and render it as the directory grid.
 *
 * @param {string|File} [src] - URL of list.txt (defaults to list.txt next to the page)
 * @param {object} [opts] - { target, mode, callback }
 * @returns {Promise<object>} the processList() handles
 */
async function loadList(
  src = window.location.origin + window.location.pathname + "list.txt",
  opts = {}
) {
  const { target = "#main", mode = MODE.over, callback } = opts;
  const text = await readSource(src);
  const view = processList(text, { target, mode });
  if (callback) callback(view);
  return view;
}

/**
 * FALLBACK (old name): directory listing. Same arguments as before.
 *
 * @param {string} [fileListUrl]
 * @param {string} [target="#main"]
 */
function parselist(
  fileListUrl = window.location.origin + window.location.pathname + "list.txt",
  target = "#main"
) {
  return loadList(fileListUrl, { target });
}




/**
 * Re-run code highlighting (highlight.js), copy icons and MathJax typesetting on the
 * rendered content. Used as the after-load hook of markdown and notebooks and by the
 * slide counter ("Re Render Math"). Work is delayed by 2s so libraries can load first.
 */
function mathjaxHljsCopyIcon() {
  console.info("mathjaxHljsCopyIcon");
  load(
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"
  );
  load(
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"
  );

  setTimeout(() => {
    MathJax.startup.document.state(0);
    MathJax.texReset();
    MathJax.typesetClear();

    grab("code").forEach((c) => {
      c.innerHTML = c.innerHTML.replaceAll("<br>", "\n");
    });
    hljs.highlightAll();
    setTimeout(WebHelper().addCopyIcon(), 1000);
    MathJax.typesetPromise();
  }, 2000);
}



/**
 * Filter the rows of the CSV table by the text in the search box.
 * Rows that do not contain the text (case-insensitive) get the `hide` class;
 * an empty search shows every row again.
 *
 * @param {HTMLInputElement} [searchEl] - the search input (pass `this` from the event attribute); defaults to #searchcsv
 */
function filtertable(searchEl) {
  searchEl = searchEl || grab("#searchcsv")[0];
  if (!searchEl) return;
  loadscss(`.hide{
    display: none !important;
  }`, "hide");
  const root = searchEl.closest(".listroot") || document;
  const term = searchEl.value.toLowerCase();
  root.querySelectorAll("tbody .tablerow").forEach((row) => {
    row.classList.toggle("hide", term.length > 0 && !row.textContent.toLowerCase().includes(term));
  });
}

/** Styles of the CSV table view (moved out of parseCsv unchanged). */
const csvScss = `
    .listroot{
      display:flex;
      flex-direction:column;
      min-height:40vh;
      padding-block: 2em;
      padding-inline:clamp(5em,5vw,1em);

      h1{
        text-transform: capitalize;

      }


      .listheader{
        padding-block:1em;
      }

      .search{
        display: block;
        margin: 0 auto;
        background-color: hsl(var(--hue,5%,5%));
        color:white;
        width: 90%;
        border-radius: .5em;
        border: 1px solid white;
        padding: .5em 1em;
        outline:none;
      }


    }
    
    `;

/**
 * PROCESS: turn CSV text into a searchable table.
 * Pure rendering: it does not fetch and does not touch the router.
 * Note: fields are split on "," only, so quoted fields that contain commas are not supported yet.
 *
 * @param {string} text - CSV content, first line is the header
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"] - where the table is rendered
 * @param {string} [opts.mode=MODE.over] - insert mode, see MODE
 * @param {string} [opts.filename=""] - shown as the page heading
 * @returns {{root: Element, table: Element, search: Element, body: Element}} handles of the created elements
 */
function processCsv(text, { target = "#main", mode = MODE.over, filename = "" } = {}) {
  loadscss(csvScss);
  const root = gen(div, "listroot", "", "listroot");
  placeInTarget(target, root, mode);

  append(root, gen(h1, filename, filename.replaceAll("%20", " ")));
  const header = gen(div, "listheader", "", "listheader");
  append(root, header);

  const search = gen(input, "searchcsv", "search", "search", { title: "search", oninput: "filtertable(this)" });
  append(header, search);
  // keyboard shortcuts must not fire while typing in the search box
  search.addEventListener("focus", () => document.removeEventListener("keydown", keyPressHandler));
  search.addEventListener("focusout", () => document.addEventListener("keydown", keyPressHandler));

  const table = gen("table", "tablemain", "", "listbody");
  append(root, table);
  const head = gen("thead", "tablehead");
  const body = gen("tbody", "tablebody");
  append(table, head);
  append(table, body);

  text.split(/\r?\n/).forEach((rowText, i) => {
    if (rowText === "" && i > 0) return; // skip blank lines (e.g. the trailing newline)
    const tr = gen("tr", `tablerow${i}`, "", "tablerow");
    append(i == 0 ? head : body, tr);
    rowText.split(",").forEach((cell, j) => {
      append(tr, gen("td", `tablecol${i}${j}`, cell));
    });
  });

  return { root, table, search, body };
}

/**
 * LOAD: fetch (or read) a CSV file and show it as a searchable table.
 *
 * @param {string|File} src - URL or File
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"]
 * @param {string} [opts.mode=MODE.over]
 * @param {boolean} [opts.syncRoute] - update router.file (URL hash) to this file. Default true for URLs, false for local Files
 * @param {function} [opts.callback] - called with the processCsv() handles when done
 * @returns {Promise<object>} the processCsv() handles
 */
async function loadCsv(src, opts = {}) {
  const { target = "#main", mode = MODE.over, callback, syncRoute = typeof src === "string" } = opts;
  const filename = getSourceName(src, false);
  if (syncRoute) router.setfile = filename;
  console.info("loadCsv");
  loadscss(slideScss);
  const text = await readSource(src);
  appendBackButton();
  const view = processCsv(text, { target, mode, filename });
  updateFiledropEventListeners();
  convertLocalLinks();
  if (callback) {
    console.info("callback");
    callback(view);
  }
  return view;
}

/**
 * FALLBACK (old name): load a CSV file as a table.
 *
 * @param {string|File} link
 * @param {function} [callback]
 */
function parseCsv(link, callback) {
  return loadCsv(link, { callback });
}


































































/**
 * Filter the slide navigator while typing in its search box: nav entries whose
 * slide text does not contain the search term get the `hide` class.
 * Scoped to the slide deck that owns the input, so several decks on a page do not interfere.
 *
 * @param {HTMLInputElement} [inputEl] - the search input (pass `this` from the event attribute); defaults to #sideBarSearchInput
 */
function handleSidebarSearch(inputEl) {
  inputEl = inputEl || grab("#sideBarSearchInput")[0];
  if (!inputEl) return;
  const root = inputEl.closest(".slideroot") || document;
  const slides = root.querySelectorAll(".slide");
  const links = root.querySelectorAll(".slideNavLink");
  const searchTerm = inputEl.value;

  slides.forEach((slide, i) => {
    const item = links[i] && links[i].parentElement;
    if (item) item.classList.toggle("hide", !slide.innerText.includes(searchTerm));
  });

  loadscss(`.hide{
    display: none !important;;
  }`, "hide");
}


/**
 * Split markdown text into slides on lines that contain only `---`.
 * Empty chunks are dropped so slide numbers stay aligned with the DOM.
 * Known limitation (unchanged): a `---` inside a fenced code block also splits.
 *
 * @param {string} md
 * @returns {string[]} one markdown string per slide
 */
function splitSlides(md) {
  return md.split(/^---\s*?$/gm).filter((chunk) => chunk.trim().length > 0);
}

/**
 * Create the navigator sidebar (title, search box, link list) inside a slide root.
 *
 * @param {Element} root - the .slideroot element
 * @returns {{aside: Element, nav: Element, search: Element, list: Element}} handles; `list` receives the nav links
 */
function buildNavigator(root) {
  const aside = gen("aside", "sideBar", "");
  const nav = gen(div, "slidenav", gen(h3, "", "Navigator"));
  const search = gen(input, "sideBarSearchInput", "", "sideBarSearchInput", { oninput: "handleSidebarSearch(this)" });
  const list = gen(ul, "slidenavlist", "", "slidenavlist");
  append(root, aside);
  append(aside, nav);
  append(nav, search);
  append(nav, list);
  return { aside, nav, search, list };
}

/**
 * Convert one markdown chunk into a slide section and its navigator entry.
 * All lookups use the elements created here, never global ids or global indexes.
 *
 * @param {Element} root - the .slideroot element
 * @param {Element} navList - the navigator <ul>
 * @param {string} chunk - markdown of this slide
 * @param {number} i - slide index
 * @param {number} total - number of slides
 * @returns {Element|null} the slide <section>, or null if the converter produced nothing
 */
function renderSlide(root, navList, chunk, i, total) {
  let slideEl = null;
  let navLink = null;

  mdToHtml(chunk, (H, S = "") => {
    slideEl = gen(section, `slide${i}`, H, "slide");
    append(root, slideEl);
    if (i != 0) {
      append(
        slideEl,
        gen(span, "", `${i + 1}/${total}`, "slideCount", {
          onclick: "mathjaxHljsCopyIcon()",
          title: "Re Render Math"
        })
      );
    }
    if (S != "") {
      // inline <script> blocks of the slide (kept from the original behaviour)
      const dynamicScript = gen(script, "dynamicScript", S, "dynamicScript");
      dynamicScript.textContent += S;
      append("body", dynamicScript);
    }
    navLink = gen(span, "", `Slide ${i + 1}`, "slideNavLink");
    navLink.onclick = () => slideEl.scrollIntoView();
    append(navList, gen(li, "", navLink));
  });

  if (!slideEl) return null;

  // show the first heading/paragraph of the slide next to its nav link
  const first = slideEl.querySelectorAll("h1,h2,h3,h4,h5,h6,p")[0];
  if (first && navLink) {
    navLink.innerHTML += `: ${gens(p, "", first.innerText, "sideNavLinkSummary")}`;
  }
  return slideEl;
}

/**
 * PROCESS: turn markdown text into a navigable slide deck.
 * Pure rendering: it does not fetch, does not touch the router and only clears
 * the target when mode is MODE.over. Safe to call again to add another deck.
 *
 * @param {string} md - markdown text
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"] - where the deck is rendered
 * @param {string} [opts.mode=MODE.over] - MODE.over clears the target first, MODE.after appends
 * @param {string} [opts.id="slideroot"] - id of the deck root (sub-elements keep their fixed ids because the CSS targets them)
 * @param {string} [opts.source=""] - URL for the "Source" link in the navigator
 * @returns {{root: Element, nav: object, slides: Element[]}} handles, e.g. for a presenter/clone view
 */
function processMarkdown(md, { target = "#main", mode = MODE.over, id = "slideroot", source = "" } = {}) {
  const root = gen(div, id, "", "slideroot");
  placeInTarget(target, root, mode);
  const nav = buildNavigator(root);

  const chunks = splitSlides(md);
  const slides = [];
  chunks.forEach((chunk, i) => {
    const slide = renderSlide(root, nav.list, chunk, i, chunks.length);
    if (slide) slides.push(slide);
  });

  if (source) {
    append(
      nav.list,
      gen(li, "", gen(a, "src", `Source`, "slideNavLink", {
        onclick: `viewSourceFile('${source}')`,
        href: source,
        target: "_blank"
      }))
    );
  }
  return { root, nav, slides };
}

/**
 * LOAD: fetch (or read) a markdown file and show it as a slide deck.
 *
 * @param {string|File} src - URL or File
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"] - where to render
 * @param {string} [opts.mode=MODE.over] - MODE.over | MODE.after
 * @param {string} [opts.id] - id of the deck root
 * @param {function} [opts.callback] - called with the processMarkdown() handles when the deck is ready
 * @returns {Promise<object>} the processMarkdown() handles
 */
async function loadMarkdown(src, opts = {}) {
  const { target = "main", mode = MODE.over, id, callback } = opts;
  loadscss(slideScss);
  const md = await readSource(src);
  appendBackButton();
  append("#dynamicScript", "", "r"); // reset scripts of a previous deck

  const view = processMarkdown(md, { target, mode, id, source: getSourceUrl(src) });

  convertLocalLinks();
  if (callback) {
    console.info("callback");
    callback(view);
  }
  updateFiledropEventListeners();
  setTimeout(() => {
    if (typeof PageNavSelf !== "undefined") PageNavSelf.updatePageNavUl();
  }, 3000);
  return view;
}

/**
 * FALLBACK (old name): show a markdown file as slides in #main. Same (url, callback) call as before.
 *
 * @param {string|File} src
 * @param {function} [callback]
 */
function parseSlide(src, callback) {
  return loadMarkdown(src, { callback });
}

/**
 * FALLBACK (old name): markdown as slides into any target. Argument order kept from the original;
 * `type` is the append() mode ("a" = append, "over" = replace).
 *
 * @param {string|Element} [target="main"]
 * @param {string|File} link
 * @param {string} [type="a"]
 * @param {function} [callback]
 */
function appendSlide(target = `main`, link, type = "a", callback) {
  return loadMarkdown(link, { target, mode: type, callback });
}



/**
 * Join a notebook text field (nbformat stores it as an array of lines or as one string).
 *
 * @param {string|string[]} v
 * @returns {string}
 */
function nbText(v) {
  return Array.isArray(v) ? v.join("") : v == null ? "" : String(v);
}

/**
 * Render one notebook output (stream, display_data, execute_result) into an output block.
 * Behaviour is kept from the original parseNotebook, including that display_data
 * text/plain is shown twice (once in <p>, once as plain code).
 *
 * @param {Element} outDiv - the .output block
 * @param {object} output - nbformat output object
 */
function renderNotebookOutput(outDiv, output) {
  const type = output.output_type;
  const data = output.data || {};

  if (type == "stream") {
    append(outDiv, gen("code", "", nbText(output.text), `${type}`));
  }

  if (type == "display_data") {
    if ("text/plain" in data) {
      append(outDiv, gen(p, "", gen(code, "", nbText(data["text/plain"]), `output ${type}`), `output ${type}`));
    }
    if ("image/png" in data) {
      let className = "";
      if (output.metadata && "needs_background" in output.metadata) {
        className = `needs-background-${output.metadata["needs_background"]}`;
      }
      const src = `data:image/png;base64,${nbText(data["image/png"]).replace(/\s+/g, "")}`;
      append(outDiv, gen(img, "", "", `output ${type} ${className}`, { src: src }));
    }
  }

  if (type == "execute_result" || type == "display_data") {
    if ("text/plain" in data) {
      append(outDiv, gen("code", "", nbText(data["text/plain"]), ` ${type}`));
    }
  }
}

/**
 * PROCESS: turn a parsed Jupyter notebook into blocks (markdown cells, code inputs, outputs) with a navigator.
 * Pure rendering: it does not fetch and does not touch the router.
 *
 * @param {string|object} nb - notebook JSON (string or already parsed)
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"] - where the notebook is rendered
 * @param {string} [opts.mode=MODE.over] - insert mode, see MODE
 * @param {string} [opts.id="blockroot"] - id of the notebook root
 * @param {string} [opts.source=""] - URL for the "Source" / "Download Source" links
 * @param {string} [opts.title=""] - notebook name shown in the heading
 * @param {string} [opts.downloadName=""] - file name offered by the download links (defaults to <dir>_<file> of source)
 * @returns {{root: Element, nav: object, blocks: Element[]}} handles of the created elements
 */
function processIpynb(nb, { target = "#main", mode = MODE.over, id = "blockroot", source = "", title = "", downloadName = "" } = {}) {
  if (typeof nb === "string") nb = JSON.parse(nb);

  const root = gen(div, id, "", "blockroot");
  placeInTarget(target, root, mode);

  const aside = gen("aside", "sideBar", "");
  const nav = gen(div, "slidenav", gen(h3, "", "Navigator"));
  const list = gen(ul, "slidenavlist", "", "slidenavlist");
  append(root, aside);
  append(aside, nav);
  append(nav, list);

  append(root, gen(h1, "Title", `Python Notebook: ${title}`, "title"));

  (nb.cells || []).forEach((cell, idx) => {
    if (!(cell.source && cell.source.length > 0)) return;

    if (cell.cell_type == "markdown") {
      const md = Array.isArray(cell.source) ? cell.source.join("\n") : String(cell.source);
      append(root, gen(div, `Markdown${idx}`, mdToHtml(md), "markdown block"));
    }

    if (cell.cell_type == "code") {
      const count = cell.execution_count;
      const inputCode = nbText(cell.source);

      const inputDiv = gen(div, `input${count}`, "", "input block");
      append(root, inputDiv);
      append(inputDiv, gen(span, "", `In [${count}] :`, "execution_count"));
      append(inputDiv, gen(pre, "", gen(code, "", inputCode, "python language-python code")));

      const outputs = cell.outputs || [];
      if (outputs.length > 0) {
        const status = outputs[0].output_type == "execute_result" ? "success" : "fail";
        const outDiv = gen(
          div,
          `output${count}`,
          gen(span, "", `Out [${count}] :`, "execution_count"),
          `output block execution_count,${status}`
        );
        append(root, outDiv);
        outputs.forEach((output) => renderNotebookOutput(outDiv, output));
      }
    }
  });

  // fill the navigator: one counter per block and one link per block
  const blocks = Array.from(root.querySelectorAll(".block"));
  blocks.forEach((block, i) => {
    append(
      block,
      gen(span, "", `${i + 1}/${blocks.length}`, "slideCount hide", {
        onclick: "mathjaxHljsCopyIcon()",
        title: "Re Render Math"
      })
    );
    const link = gen(a, "", `Block ${i + 1}`, "slideNavLink");
    link.onclick = () => block.scrollIntoView();
    append(list, gen(li, "", link));
  });

  // source / download links
  if (source) {
    const parts = source.split("/");
    const fileName = downloadName || `${parts[parts.length - 2]}_${parts[parts.length - 1]}`;
    append(
      list,
      gen(li, "", gen(a, "src", `Source`, "slideNavLink", {
        onclick: `viewSourceFile('${source}')`,
        href: source,
        target: "_blank",
        download: fileName
      }))
    );
    append(
      root,
      gen(span, "", gen(a, "src", `Download Source`, "button", {
        onclick: `viewSourceFile('${source}')`,
        href: source,
        target: "_blank",
        download: fileName
      }))
    );
  }

  return { root, nav: { aside, nav, list }, blocks };
}

/**
 * LOAD: fetch (or read) a .ipynb file and show it as notebook blocks.
 * Post-processing (links, drop zone, math/highlighting) now runs AFTER the content exists.
 *
 * @param {string|File} src - URL or File
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"]
 * @param {string} [opts.mode=MODE.over]
 * @param {string} [opts.id]
 * @param {function} [opts.callback] - called with the processIpynb() handles when done
 * @returns {Promise<object>} the processIpynb() handles
 */
async function loadIpynb(src, opts = {}) {
  const { target = "#main", mode = MODE.over, id, callback } = opts;
  loadscss(slideScss);
  const nb = await readSource(src);
  appendBackButton();

  const name = getSourceName(src);
  const view = processIpynb(nb, {
    target,
    mode,
    id,
    source: getSourceUrl(src),
    title: name.replace(/\.ipynb$/i, ""),
    downloadName: typeof src === "string" ? "" : name
  });

  updateFiledropEventListeners();
  convertLocalLinks();
  mathjaxHljsCopyIcon();
  if (callback) {
    console.info("callback");
    callback(view);
  }
  setTimeout(() => {
    if (typeof PageNavSelf !== "undefined") PageNavSelf.updatePageNavUl();
  }, 3000);
  return view;
}

/**
 * FALLBACK (old name): show a notebook in #main.
 *
 * @param {string|File} link
 * @param {function} [callback]
 */
function parseNotebook(link, callback) {
  return loadIpynb(link, { callback });
}

/**
 * Remove the parent element of the clicked element (used by the PDF dialog close button).
 *
 * @param {HTMLElement} e
 */
function closeparent(e) {
  append(e.parentElement, "", "replace");
}

/**
 * LOAD: show a PDF in a modal dialog with a download button.
 * There is no separate processPdf: the browser's <object> viewer does the rendering.
 *
 * @param {string|File} src - URL or File
 * @param {object} [opts]
 * @param {string|Element} [opts.target="#main"] - element that hosts the dialog
 */
function loadPdf(src, { target = "#main" } = {}) {
  loadscss(slideScss);
  const link = (typeof src === "string" ? src : URL.createObjectURL(src)).replaceAll("./", router.dirpath);

  append(target, gen(dialog, "pdfdialog", "", "pdfdialog active modal"));
  append(pdfdialog, "", "o");
  append(pdfdialog, gen(a, "", "Download PDF", "download button", link));
  append(
    pdfdialog,
    gen("object", "mainpdf", "", "mainpdf", {
      data: link,
      type: "application/pdf",
    })
  );
  loadscss(pdfdialogscss, "pdfdialogscss");
  pdfdialog.showModal();
  grab(".pdfdialog")[0].addEventListener('click', (event) => event.stopPropagation());

  grab(target)[0].addEventListener('click', () => {
    grab(".pdfdialog")[0].close();
  });

  append(
    pdfdialog,
    gen(span, "closedialog", "", "closedialog cross", {
      onclick: "closeparent(this)", title: "close pdf"
    })
  );
}

/**
 * FALLBACK (old name): show a PDF in a dialog.
 *
 * @param {string|File} link
 */
function parsePdf(link) {
  return loadPdf(link);
}

WebHelper().init();
if (window.location.href.includes("Gallery")) {
  // log("gallery")
  setTimeout(() => {
    load("/gallery.js");
  }, 1000);
}

reloadPage();

//
/**
 * Drag & drop event handlers. They are plain function declarations (hoisted, defined ONCE)
 * so that removeEventListener can really remove them and so they exist when reloadPage()
 * runs earlier in the file. The old version redeclared them on every call, which made
 * listeners stack up and a single drop load a file several times.
 */
function onDropZoneDragOver(e) {
  // needed so the browser allows dropping
  e.preventDefault();
}

/** Highlight (blur class) the drop zone while a file is dragged over it. */
function onDropZoneDragEnter(e) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.add("blur");
}

/** Remove the drop zone highlight when the drag leaves. */
function onDropZoneDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.remove("blur");
}

/** Open the dropped files through the handlers registry (openFiles). */
function onDropZoneDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.remove("blur");
  openFiles(e.dataTransfer.files);
}

/**
 * Make an element a drop zone for local files (.md, .ipynb, .csv, ...).
 * Safe to call repeatedly: listeners are removed before being added again.
 * Dropped files are opened with openFiles(), i.e. through the handlers registry.
 *
 * @param {Element} [target=#main] - drop zone element
 */
function updateFiledropEventListeners(target = grab("#main")[0]) {
  if (!target) return;
  target.classList.remove("blur");
  [
    ["dragover", onDropZoneDragOver],
    ["dragenter", onDropZoneDragEnter],
    ["dragleave", onDropZoneDragLeave],
    ["drop", onDropZoneDrop]
  ].forEach(([type, handler]) => {
    target.removeEventListener(type, handler, true);
    target.addEventListener(type, handler, true);
  });
}

// updateFiledropEventListeners()

updateFiledropEventListeners();

setTimeout(() => {
  try {
    load(`${router.dirpath}script.js`)
  } catch (error) {
    console.log(error)    
  };
}, 2000);




var hidenodescss=`
[data-dir*="node_modules"]{
  display:none !important;
}
`
setTimeout(loadscss(hidenodescss),2000)

var printSlideStyle=`

@media print {
    @page {
        size: A4 landscape;
    }

    .slideroot,
    .blockroot {
        overflow: auto;
        height: auto;
        background-color: var(--bgColor);
    
    }

    .slide {
        page-break-after: always;
        break-inside: avoid;
        page-break-inside: avoid;
    }

    .block {
        break-inside: avoid;
        page-break-inside: avoid;
    }

    img {
        display: block;
        page-break-before: auto;
        page-break-after: auto;
        page-break-inside: avoid;
        break-inside: avoid;
    }
    
    video,
    #sideBar,
    #appfooter {
        display: none;
    }
    a::after{
      font-style: italic;
      font-size:.8em;
      content: " (" attr(href) ") ";
   }
}`


var printNotesStyle=`

@media print {
    @page {
        size: A4 portrait;
    }
    body{
    font-size:12px;
    --fontsize:12px;
    
    }
:root{
  --fontsize:12px;
  --fontScale:.7;


}

    .slideroot,
    .blockroot {
        overflow: auto;
        height: min-content;
        background-color: white;
padding:.5em;
    }

    .slide {
//        page-break-after: always;
//        break-inside: avoid;
//        page-break-inside: avoid;
    }

    .block {
//        break-inside: avoid;
//        page-break-inside: avoid;
    }

    img {
        display: block;
//        page-break-before: auto;
//        page-break-after: auto;
        page-break-inside: avoid;
        break-inside: avoid;
    }
    
    video,
    #sideBar,
    #appfooter {
        display: none;
    }
    a::after{
      font-style: italic;
      font-size:.8em;
      content: " (" attr(href) ") ";
   }
}`
//loadscss(printSlideStyle,"printSlideStyle")


//Disable Right Click
// if(!DEBUG){
// window.addEventListener("contextmenu",(e)=>{
// e.preventDefault() 
// e.stopImmediatePropagation()
// })
// }
console.info(`SlideGen version ${slidegenversion}\ Ready`);
console.info(`SlideGen copyrights ${slidegenlicense}\ Ready`);



/**
 * Make every <img>/<svg> inside <main> toggle a zoomed "showFullscreen" class when
 * clicked (attached after a 2s delay so the content exists).
 */
function imageFullscreenToggle() {
  var imagFullscreenStyle = `.showFullscreen{
  height: auto;
  transition: all .5s ease-in-out;
  transform: scale(1.1);
  width: 100% !important;
}
  `

  setTimeout(() => {
    var images = grab("main svg, main img");
  images.forEach((e) => {

    e.addEventListener("click", () => {
      e.classList.toggle("showFullscreen");
      loadscss(imagFullscreenStyle, "imagFullscreenStyle");
    });
  });

  }, 2000);
};