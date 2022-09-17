#!/bin/bash

# Reference:
# - https://stackoverflow.com/questions/6442364/running-script-upon-login-in-mac-os-x
# - https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
# - https://manpagez.com/man/5/launchd.plist/

# To install:
# `cp /Users/tomik/Dropbox/Development/Tools/dotfiles/scripts/com.tomasvitek.share-printer.plist /Library/LaunchAgents/`
# `sudo chown root:wheel /Library/LaunchAgents/com.tomasvitek.share-printer.plist`
# `launchctl load /Library/LaunchAgents/com.tomasvitek.share-printer.plist`

# reference: 
# - https://gist.github.com/elia/b752b414d449d7541102fe2d095f2e31
# - https://developer.apple.com/bonjour/printing-specification/bonjourprinting-1.2.1.pdf
echo "$(date +"%Y-%m-%d %T") Starting sharing >>Samsung ML-2160 @ Time Capsule<< now..."
echo ""

dns-sd -R "Samsung ML-2160 @ Time Capsule" _ipp._tcp.,_universal . 631 URF=none pdl=application/pdf,image/urf "txtvers=1" "qtotal=1" "rp=printers/Samsung_ML_2160___Time_Capsule" "ty=Samsung ML-2160 Series" "adminurl=https://Tomikuv-MacBook-Pro.local.:631/printers/Samsung_ML_2160___Time_Capsule" "note=Basecamp Time Capsule" "priority=0" "product=(Samsung ML-2160 Series)" "pdl=application/octet-stream,application/pdf,application/postscript,image/jpeg,image/png,image/pwg-raster,image/urf" "UUID=f790f55a-c489-3102-6374-1412c73b4183" "TLS=1.2" "printer-state=3" "printer-type=0x809006"
echo ""

echo "$(date +"%Y-%m-%d %T") Done..."
echo ""
