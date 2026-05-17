$content = Get-Content 'd:\博士\课题组网页\client\src\pages\NewsDetail.tsx' -Raw
$oldText = "images/image5.jpeg' alt='' style='max-width: 60%; height: auto;'/></div>`"`n    images:"
$newText = "images/image5.jpeg' alt='' style='max-width: 60%; height: auto;'/></div><br/><p style='text-align: right; font-size: 14px;'>图文：华东师大上海人工智能金融孵化器</p>`"`n    images:"
$content = $content.Replace($oldText, $newText)
Set-Content -Path 'd:\博士\课题组网页\client\src\pages\NewsDetail.tsx' -Value $content -NoNewline
Write-Host "Done"