#!/usr/bin/env bash

# reference: https://gist.github.com/elia/b752b414d449d7541102fe2d095f2e31
# reference: https://www.karltarvas.com/2020/09/11/macos-run-script-on-startup.html
dns-sd -R "Samsung ML-2160 @ Time Capsule" _ipp._tcp.,_universal . 631 URF=none pdl=application/pdf,image/urf "txtvers=1" "qtotal=1" "rp=printers/Samsung_ML_2160___Time_Capsule" "ty=Samsung ML-2160 Series" "adminurl=https://Tomikuv-MacBook-Pro.local.:631/printers/Samsung_ML_2160___Time_Capsule" "note=Basecamp Time Capsule" "priority=0" "product=(Samsung ML-2160 Series)" "pdl=application/octet-stream,application/pdf,application/postscript,image/jpeg,image/png,image/pwg-raster,image/urf" "UUID=f790f55a-c489-3102-6374-1412c73b4183" "TLS=1.2" "printer-state=3" "printer-type=0x809006" &
