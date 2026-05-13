$folder = "D:\博士\课题组网页\client\public\avatars\新闻动态"
Set-Location $folder
foreach ($f in Get-ChildItem -Filter "*.zip") {
    $name = $f.BaseName -replace "_with_images",""
    Write-Host "Extracting: $name"
    Expand-Archive -Path $f.FullName -DestinationPath $name -Force
}
Write-Host "Done!"