# Bug: Chrome doesn't handle back to back setIcon correctly

When the extension is clicked, it calls setIcon three times:
first to normal, second to severe, third back to normal.
But Chrome will show the severe icon (with exclamation mark) instead of the normal one.

Test environment:
* Chrome Version: 97.0.4676.1 (Official Build) canary (x86_64)
* OS:	macOS Version 11.6 (Build 20G165)
