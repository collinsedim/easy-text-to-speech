# Easy Text-To-Speech Converter

This script converts plain text inputed in the textbox or from uploaded `.txt` file to speech.

Everything happens within your browser, nothing is transferred remotely!

### Dependencies

- TailwindCSS

### Note:

On iOS and Safari, the list of voices returned by `window.speechSynthesis.getVoices()` may contain only the default system voice, or a limited set of voices. In some cases, the browser may ignore the selected voice and use the default voice for speech synthesis, even if other voices are available and a different voice is selected.

Unfortunately, this is a limitation of the Web Speech API's implementation on these platforms, and there's not much you can do about it in your code. The Web Speech API is still a relatively new and evolving standard, and its support varies across different browsers and platforms.
