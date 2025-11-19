# PowerShell script to copy files to the new repo

$sourceDir = "C:\Users\PC\StudioProjects\IReader\lnreader-plugins-unminified-setup"
$targetDir = "C:\Users\PC\StudioProjects\lnreader-plugins-unminified"

Write-Host "Copying files from setup directory to new repo..." -ForegroundColor Green

# Copy all files
Copy-Item -Path "$sourceDir\*" -Destination $targetDir -Recurse -Force -Exclude "copy-to-repo.ps1","SETUP.md"

Write-Host "Files copied successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. cd $targetDir"
Write-Host "2. git add ."
Write-Host "3. git commit -m 'Initial commit: Setup unminified plugin builder'"
Write-Host "4. Create repo on GitHub: https://github.com/new"
Write-Host "5. git remote add origin https://github.com/YOUR_USERNAME/lnreader-plugins-unminified.git"
Write-Host "6. git push -u origin main"
Write-Host ""
Write-Host "See SETUP.md for detailed instructions" -ForegroundColor Cyan
