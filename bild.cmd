ng build -aot -prod -bh "/app/" -op "docs"
copy "docs\index.html" "docs\404.html"