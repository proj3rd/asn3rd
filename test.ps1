# Usage:
# - test
# - test tokens <filename under example/>
# - test tree <filename under example/>
# - test gui <filename under example/>

$origin = Get-Location
$option = $args[0]
$filename = $args[1]

if (!$option -and !$filename) {
  # test all
  Set-Location $PSScriptRoot
  # get all ASN.1 files
  $filelist = Get-ChildItem -Path examples/* -Include *.asn1
  # complie the grammar
  antlr4 -o .antlr src/asn1.g4 && `
  Set-Location .antlr && `
  javac *.java
  $total = ($filelist | Measure-Object).Count
  $numOk = 0
  $numError = 0
  foreach ($file in $filelist) {
    $filename = $file.Name
    # temporary file to store errors
    $temp = New-TemporaryFile
    grun asn1 moduleDefinitions `
      -encoding utf-8 `
      $PSScriptRoot/examples/$filename > $null 2>$temp
    $result = Get-Content $temp | Measure-Object -Character
    if ($result.Characters -eq 0) {
      $numOk += 1
      Write-Host "✅" $filename
    } else {
      $numError += 1
      Copy-Item $temp -Destination $PSScriptRoot/test-$filename-error.log
      Write-Host "❌" $filename
    }
  }
  Write-Host "✅" $numOk "❌" $numError "#️⃣" $total
  Set-Location $origin
  exit $numError
} else {
  # test a specific file
  if ($option -eq "tokens" -or $option -eq "tree" -or $option -eq "gui") {
    Set-Location $PSScriptRoot
    antlr4 -o .antlr src/asn1.g4 && `
    Set-Location .antlr && `
    javac *.java && `
    grun asn1 moduleDefinitions -$option `
      -encoding utf-8 `
      $PSScriptRoot/examples/$filename > $PSScriptRoot/test-$option-$filename.log `
      2>$PSScriptRoot/test-$option-$filename-error.log
    Set-Location $origin
  }
}
